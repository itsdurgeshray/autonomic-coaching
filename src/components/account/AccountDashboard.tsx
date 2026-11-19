'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AccountMenu } from '@/components/account/AccountMenu';
import { BrandMark } from '@/components/account/BrandMark';
import { NextStepCard } from '@/components/account/NextStepCard';
import { ProfileCard } from '@/components/account/ProfileCard';
import { Icon, type IconProps } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { accountCopy, profileCopy } from '@/content/account';
import { readAssessmentSummary, type AssessmentSummary } from '@/lib/assessment/summary';
import { accountActions, useAccount } from '@/lib/account/store';

export type AccountDashboardProps = { brand: string };

/* Fine grain over the banner so it reads as a surface, not a flat fill */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.01 0 0 0 0 0.15 0 0 0 0 0.13 0 0 0 .5 0'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E\")";

const CARD =
  'relative flex h-[120px] flex-col justify-between rounded-[16px] border border-white/60 bg-white/65 p-5 shadow-[0_1px_2px_rgba(2,10,29,.05)] backdrop-blur-md md:px-6 md:py-6';

export function AccountDashboard({ brand }: AccountDashboardProps) {
  const router = useRouter();
  const account = useAccount();
  /* Rendered only on the client (behind RequireSession), so local progress can be read straight away */
  const [summary] = useState<AssessmentSummary | null>(() => readAssessmentSummary());
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (account.isReady && account.session && !account.profile)
      router.replace('/onboarding/profile');
  }, [account.isReady, account.session, account.profile, router]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!account.profile || !account.session) return null;
  const name = account.profile.fullName;
  const signOut = () => {
    accountActions.signOut();
    router.push('/login');
  };
  const s = accountCopy.assessmentStatus;
  const note: Record<string, string> = {
    assessments: !summary?.answered
      ? s.notStarted
      : summary.isComplete
        ? s.complete
        : s.done(summary.percent),
  };

  return (
    <div className="min-h-svh">
      {/* Brand bar: sits on the banner, turns white with a hairline once the page scrolls */}
      <header
        className={cn(
          'sticky top-0 z-30 transition-[background-color,box-shadow] duration-200',
          isScrolled
            ? 'bg-white shadow-[0_1px_0_var(--line-2),0_8px_24px_-16px_rgba(2,10,29,.2)]'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-[1312px] items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
          <BrandMark name={brand} />
          <div className="flex items-center gap-1 md:gap-3">
            <Link
              href={accountCopy.help.href}
              className="ds-btn ds-btn-ghost max-sm:w-10 max-sm:px-0"
            >
              <Icon name="i-question" className="ds-ico text-[20px]" />
              <span className="max-sm:sr-only">{accountCopy.help.label}</span>
            </Link>
            <AccountMenu
              initial={name.charAt(0).toUpperCase()}
              labels={accountCopy.menu}
              onProfile={() =>
                document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })
              }
              onSignOut={signOut}
            />
          </div>
        </div>
      </header>

      {/* Banner: greeting and the account areas, as in the account design */}
      <div className="relative isolate -mt-[64px] overflow-hidden bg-[linear-gradient(180deg,#dcefe5_0%,#e7f3ed_100%)] pt-[64px] md:-mt-[72px] md:pt-[72px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply"
          style={{ backgroundImage: GRAIN }}
        />
        <div className="mx-auto max-w-[1312px] px-4 pt-6 pb-10 md:px-8 md:pt-10 md:pb-12">
          <p className="ds-t-lead ds-c-2">{accountCopy.greeting}</p>
          <h1 className="ds-t-page ds-w-500 mt-1">{name}</h1>
          <ul
            role="list"
            className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4 lg:grid-cols-4 lg:gap-5"
          >
            {accountCopy.tiles.map((t) => {
              const sub = note[t.id] ?? (t.href ? undefined : accountCopy.later);
              return (
                <li
                  key={t.id}
                  className={cn(CARD, t.href && 'transition-colors duration-200 hover:bg-white/90')}
                >
                  <div className="flex items-start justify-between gap-2">
                    <Icon
                      name={t.icon as IconProps['name']}
                      className={cn(
                        'ds-ico text-[36px] md:text-[40px]',
                        t.href ? 'text-g-600' : 'text-g-600/50',
                      )}
                    />
                    {sub && (
                      <span
                        className={cn(
                          'ds-t-12 hidden text-right md:block',
                          t.href ? 'text-g-700' : 'ds-c-3',
                        )}
                      >
                        {sub}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className={cn('ds-t-16 ds-w-500', t.href ? 'text-ink' : 'ds-c-2')}>
                      {t.href ? (
                        <Link
                          href={t.href}
                          className="focus-visible:after:outline-g-600 outline-none after:absolute after:inset-0 after:rounded-[16px] focus-visible:after:outline-2 focus-visible:after:outline-offset-2"
                        >
                          {t.title}
                        </Link>
                      ) : (
                        t.title
                      )}
                    </h2>
                    {sub && (
                      <p className={cn('ds-t-12 md:hidden', t.href ? 'text-g-700' : 'ds-c-3')}>
                        {sub}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <main
        id="main"
        className="mx-auto flex max-w-[1312px] flex-col gap-6 px-4 pt-8 pb-16 md:px-8 md:pt-10"
      >
        <NextStepCard intake={account.intake} assessment={summary} />
        <ProfileCard
          profile={account.profile}
          email={account.session.email}
          copy={accountCopy}
          profileText={profileCopy}
          onSignOut={signOut}
        />
      </main>
    </div>
  );
}
