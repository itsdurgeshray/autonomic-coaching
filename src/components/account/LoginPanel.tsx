'use client';

import Link from 'next/link';
import { useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { ZohoMark } from '@/components/ui/ZohoMark';
import { signInWithZoho } from '@/lib/account/auth';
import { accountActions, nextRoute, useAccount } from '@/lib/account/store';
import type { authCopy } from '@/content/account';

export type LoginPanelProps = { copy: typeof authCopy };

/** Sign-in: centred call to action, consent pinned to the foot of the column as in the reference */
export function LoginPanel({ copy }: LoginPanelProps) {
  const router = useRouter();
  const account = useAccount();
  const [hasConsent, setHasConsent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const errorId = useId();
  const consentRef = useRef<HTMLInputElement>(null);

  async function onContinue() {
    if (!hasConsent) {
      setShowError(true);
      consentRef.current?.focus();
      return;
    }
    setIsBusy(true);
    const session = await signInWithZoho();
    accountActions.signIn(session);
    router.push(nextRoute({ ...account, session }));
  }

  const signedIn = account.isReady && account.session;

  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="my-auto flex w-full flex-col items-center py-10 lg:py-12">
        <Heading as="h1" look="page">
          {copy.title}
        </Heading>
        <p className="ds-t-14 ds-c-2 mt-2 max-w-[44ch]">{copy.intro}</p>

        {signedIn ? (
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              size="xl"
              onClick={() => router.push(nextRoute(account))}
              className="min-w-[240px]"
            >
              {copy.continue} <Icon name="arrow" className="ds-ico" />
            </Button>
            <p className="ds-t-14 ds-c-2">
              {copy.signedInAs}{' '}
              <strong className="ds-w-500 text-ink">{account.session?.email}</strong>.{' '}
              <button
                type="button"
                className="ds-link text-danger"
                onClick={() => accountActions.signOut()}
              >
                {copy.signOut}
              </button>
            </p>
          </div>
        ) : (
          <>
            <Button
              size="xl"
              isBlock
              onClick={onContinue}
              isLoading={isBusy}
              aria-describedby={showError ? errorId : undefined}
              className="mt-8 sm:w-auto sm:min-w-[240px]"
            >
              {!isBusy && (
                <span className="grid size-7 place-items-center rounded-[8px] bg-white">
                  <ZohoMark className="size-[18px]" />
                </span>
              )}
              {isBusy ? copy.connecting : copy.provider}
            </Button>
            <p role="status" aria-live="polite" className="sr-only">
              {isBusy ? copy.connecting : ''}
            </p>
          </>
        )}
      </div>

      {!signedIn && (
        <div className="flex w-full flex-col items-center gap-2 pb-6 lg:pb-4">
          {showError && (
            <p id={errorId} className="ds-f-error justify-center">
              <Icon name="i-warning-circle" className="ds-ico" />
              {copy.consentError}
            </p>
          )}
          <Checkbox
            ref={consentRef}
            checked={hasConsent}
            onChange={(e) => {
              setHasConsent(e.target.checked);
              if (e.target.checked) setShowError(false);
            }}
            aria-invalid={showError || undefined}
            aria-describedby={showError ? errorId : undefined}
            labelClassName="text-left"
            label={
              <>
                {copy.consentBefore}{' '}
                <Link href={copy.privacy.href} className="ds-link ds-ink">
                  {copy.privacy.label}
                </Link>{' '}
                {copy.consentJoin}{' '}
                <Link href={copy.terms.href} className="ds-link ds-ink">
                  {copy.terms.label}
                </Link>
                .
              </>
            }
          />
        </div>
      )}
    </div>
  );
}
