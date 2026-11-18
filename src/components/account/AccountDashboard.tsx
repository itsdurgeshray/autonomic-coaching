'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AccountMenu } from '@/components/account/AccountMenu';
import { BrandMark } from '@/components/account/BrandMark';
import { NextStepCard } from '@/components/account/NextStepCard';
import { ProfileCard } from '@/components/account/ProfileCard';
import { Icon, type IconProps } from '@/components/ui/Icon';
import { accountCopy, profileCopy } from '@/content/account';
import { readAssessmentSummary, type AssessmentSummary } from '@/lib/assessment/summary';
import { accountActions, useAccount } from '@/lib/account/store';

export type AccountDashboardProps = { brand: string };

/* Fine grain over the banner so it reads as a surface, not a flat fill */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.01 0 0 0 0 0.15 0 0 0 0 0.13 0 0 0 .5 0'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function AccountDashboard({ brand }: AccountDashboardProps) {
  const router = useRouter();
  const account = useAccount();
  /* Rendered only on the client (behind RequireSession), so local progress can be read straight away */
  const [summary] = useState<AssessmentSummary | null>(() => readAssessmentSummary());

  useEffect(() => {
    if (account.isReady && account.session && !account.profile)
      router.replace('/onboarding/profile');
  }, [account.isReady, account.session, account.profile, router]);

  if (!account.profile || !account.session) return null;
  const name = account.profile.fullName;
  const signOut = () => {
    accountActions.signOut();
    router.push('/login');
  };
  const s = accountCopy.assessmentStatus;
  const note: Record<string, string | undefined> = {
    assessments: !summary?.answered
      ? s.notStarted
      : summary.isComplete
        ? s.complete
        : s.done(summary.percent),
  };

  return (
    <div className="min-h-svh">
      {/* Banner: brand bar, greeting and the four account areas, as in the account design */}
      <div className="relative isolate overflow-hidden border-b border-[rgba(14,122,82,.12)] bg-[linear-gradient(180deg,#e2f1ea_0%,#eaf5ef_55%,#f2f8f4_100%)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[.35] mix-blend-multiply"
          style={{ backgroundImage: GRAIN }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-24 -z-10 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(143,239,202,.55),transparent)]"
        />
        <header className="mx-auto flex max-w-[1312px] items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6">
          <BrandMark name={brand} />
          <div className="flex items-center gap-2 md:gap-3">
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
        </header>
        <div className="mx-auto max-w-[1312px] px-4 pt-6 pb-10 md:px-8 md:pt-12 md:pb-14">
          <p className="ds-t-lead ds-c-2">{accountCopy.greeting}</p>
          <h1 className="ds-t-h2 text-g-900 mt-1">{name}</h1>
          <ul
            role="list"
            className="mt-6 grid grid-cols-2 gap-3 md:mt-10 md:gap-4 lg:grid-cols-4 lg:gap-6"
          >
            {accountCopy.tiles.map((t) => (
              <li
                key={t.id}
                id={t.id === 'assessments' ? undefined : t.id}
                className="group relative flex min-h-[148px] flex-col rounded-[16px] border border-white/80 bg-white/70 p-4 shadow-[0_2px_4px_rgba(2,10,29,.04),0_16px_32px_-24px_rgba(2,39,33,.35)] backdrop-blur-md transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white md:min-h-[168px] md:p-6"
              >
                <div className="flex items-start justify-between gap-2">
                  <Icon
                    name={t.icon as IconProps['name']}
                    className="ds-ico text-g-700 text-[32px] md:text-[40px]"
                  />
                  {note[t.id] && <span className="ds-t-12 text-g-700">{note[t.id]}</span>}
                </div>
                <h2 className="ds-t-title mt-auto pt-4">{t.title}</h2>
                <Link
                  href={t.href}
                  className="ds-link ds-ink ds-t-14 mt-1 self-start after:absolute after:inset-0 after:rounded-[16px]"
                >
                  {t.link}
                  <span className="sr-only"> {t.title.toLowerCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main
        id="main"
        className="mx-auto flex max-w-[1312px] flex-col gap-6 px-4 pt-8 pb-16 md:px-8 md:pt-12"
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
