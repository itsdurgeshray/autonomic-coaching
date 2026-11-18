import type { Metadata } from 'next';
import { AuthShell } from '@/components/account/AuthShell';
import { BrandMark } from '@/components/account/BrandMark';
import { JourneySteps } from '@/components/account/JourneySteps';
import { ProfileForm } from '@/components/account/ProfileForm';
import { journeySteps, profileCopy } from '@/content/account';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Set up your profile',
  description: 'A few personal details so your coach can read your answers in the right context.',
  path: '/onboarding/profile',
  isPrivate: true,
});

export default function ProfilePage() {
  return (
    <AuthShell
      media={profileCopy.media}
      caption={profileCopy.caption}
      width="wide"
      header={
        <div className="flex w-full max-w-[640px] flex-col items-center gap-5">
          <BrandMark name={site.name} />
          <JourneySteps steps={journeySteps} currentId="profile" isCompact />
        </div>
      }
    >
      <ProfileForm copy={profileCopy} />
    </AuthShell>
  );
}
