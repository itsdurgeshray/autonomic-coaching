import type { Metadata } from 'next';
import { AuthShell } from '@/components/account/AuthShell';
import { BrandMark } from '@/components/account/BrandMark';
import { LoginPanel } from '@/components/account/LoginPanel';
import { authCopy } from '@/content/account';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sign in',
  description:
    'Sign in to apply for one-to-one coaching with Justin Maguire, check whether it fits you and continue your health assessment.',
  path: '/login',
  isPrivate: true,
});

export default function LoginPage() {
  return (
    <AuthShell
      media={authCopy.media}
      caption={authCopy.caption}
      header={<BrandMark name={site.name} />}
    >
      <LoginPanel copy={authCopy} />
    </AuthShell>
  );
}
