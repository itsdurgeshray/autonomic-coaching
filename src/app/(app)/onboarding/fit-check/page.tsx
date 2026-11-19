import type { Metadata } from 'next';
import { AuthShell } from '@/components/account/AuthShell';
import { BrandMark } from '@/components/account/BrandMark';
import { FitCheckFlow } from '@/components/account/FitCheckFlow';
import { fitCheck } from '@/content/fitCheck';
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
      media={fitCheck.media}
      caption={fitCheck.caption}
      isBandHidden
      header={<BrandMark name={site.name} />}
    >
      <FitCheckFlow />
    </AuthShell>
  );
}
