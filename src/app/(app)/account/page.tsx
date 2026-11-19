import type { Metadata } from 'next';
import { AccountDashboard } from '@/components/account/AccountDashboard';
import { AccountSkeleton } from '@/components/account/AccountSkeleton';
import { accountCopy } from '@/content/account';
import { RequireSession } from '@/components/account/RequireSession';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Your account',
  description: 'Your coaching account: next steps, health assessment progress and profile details.',
  path: '/account',
  isPrivate: true,
});

export default function AccountPage() {
  return (
    <RequireSession fallback={<AccountSkeleton label={accountCopy.loading} />}>
      <AccountDashboard brand={site.name} />
    </RequireSession>
  );
}
