'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from '@/lib/account/store';

export type RequireSessionProps = {
  children: React.ReactNode;
  /** Shown while the session is read, in place of the spinner */
  fallback?: React.ReactNode;
};

/** Sends signed-out visitors to sign in; shows a quiet loading state while the session is read */
export function RequireSession({ children, fallback }: RequireSessionProps) {
  const account = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (account.isReady && !account.session) router.replace('/login');
  }, [account.isReady, account.session, router]);

  if (!account.isReady || !account.session) {
    if (fallback) return <>{fallback}</>;
    return (
      <div className="text-g-700 grid min-h-svh place-items-center" aria-busy="true">
        <span className="ds-spin ds-lg" />
        <span className="sr-only">Loading your account</span>
      </div>
    );
  }
  return <>{children}</>;
}
