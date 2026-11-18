import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthShell } from '@/components/account/AuthShell';
import { BrandMark } from '@/components/account/BrandMark';
import { FitCheckFlow } from '@/components/account/FitCheckFlow';
import { FitJourneyPanel } from '@/components/account/FitJourneyPanel';
import { JourneySteps } from '@/components/account/JourneySteps';
import { journeySteps, onboardingCopy, profileCopy } from '@/content/account';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Fit check',
  description:
    'Six short questions to see whether one-to-one coaching fits what you need right now.',
  path: '/onboarding/fit-check',
  isPrivate: true,
});

export default function FitCheckPage() {
  return (
    <AuthShell
      media={profileCopy.media}
      caption={profileCopy.caption}
      panel={<FitJourneyPanel />}
      isBandHidden
      width="wide"
      header={
        <div className="flex w-full max-w-[640px] flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <BrandMark name={site.name} />
            <Link href={onboardingCopy.exit.href} className="ds-link ds-ink ds-t-14">
              {onboardingCopy.exit.label}
            </Link>
          </div>
          <JourneySteps
            steps={journeySteps}
            currentId="fit-check"
            isCompact
            className="self-center"
          />
        </div>
      }
    >
      <FitCheckFlow />
    </AuthShell>
  );
}
