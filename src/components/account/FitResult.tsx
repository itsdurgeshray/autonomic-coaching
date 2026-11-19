'use client';

import { Button, ButtonLink, TextLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Icon, type IconProps } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { fitCheck, fitOutcome } from '@/content/fitCheck';

export type FitResultProps = { answers: Record<string, string[]>; onRetake: () => void };

/* One quiet mark per outcome: green for a good fit, blue when coaching may not suit, red when medical care comes first */
const LOOK: Record<string, { icon: IconProps['name']; tone: string }> = {
  fit: { icon: 'check', tone: 'bg-g-50 text-g-700' },
  'not-fit': { icon: 'i-info', tone: 'bg-b-25 text-b-700' },
  urgent: { icon: 'i-first-aid', tone: 'bg-danger-bg text-danger' },
};

/** Fit check result: mark, title, one paragraph, then a single clear next step */
export function FitResult({ answers, onRetake }: FitResultProps) {
  const { outcome, reasons } = fitOutcome(answers);
  const copy = fitCheck.results[outcome];
  const look = LOOK[outcome];

  return (
    <section
      aria-labelledby="fit-result-title"
      className="my-auto flex w-full animate-[rise_.5s_var(--ease)_both] flex-col items-center py-10 text-center lg:py-12"
    >
      <span
        aria-hidden="true"
        className={cn('grid size-14 place-items-center rounded-full text-[24px]', look.tone)}
      >
        <Icon name={look.icon} className="ds-ico" />
      </span>
      <p className="ds-t-12 ds-c-3 mt-6">{copy.eyebrow}</p>
      <Heading as="h1" look="page" id="fit-result-title" className="mt-1">
        {copy.title}
      </Heading>
      <p className="ds-t-14 ds-c-2 mt-2 max-w-[48ch]">{copy.body}</p>

      {outcome === 'fit' && (
        <ul
          role="list"
          className="ds-t-12 ds-c-2 mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2"
        >
          {fitCheck.results.fit.points.map((p) => (
            <li key={p} className="flex items-center gap-1.5">
              <Icon name="check" className="ds-ico text-g-700 text-[14px]" />
              {p}
            </li>
          ))}
        </ul>
      )}

      {outcome === 'not-fit' && reasons.length > 0 && (
        <ul role="list" className="mt-6 flex flex-col gap-1.5">
          {reasons.map((r) => (
            <li key={r} className="ds-t-14 text-ink">
              {fitCheck.results['not-fit'].reasons[r]}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto">
        {outcome === 'fit' ? (
          <ButtonLink href="/assessment" size="xl" isBlock className="sm:min-w-[280px]">
            {copy.primary}
          </ButtonLink>
        ) : (
          <Button size="xl" isBlock onClick={onRetake} className="sm:min-w-[280px]">
            {copy.primary}
          </Button>
        )}
        <ButtonLink href="/account" variant="ghost" size="md">
          {copy.secondary}
        </ButtonLink>
      </div>

      {outcome === 'not-fit' && (
        <div className="border-line-2 mt-10 w-full border-t pt-6">
          <p className="ds-t-12 ds-c-3">{fitCheck.results['not-fit'].alternativesTitle}</p>
          <ul role="list" className="mt-2 flex flex-col items-center gap-1">
            {fitCheck.results['not-fit'].alternatives.map((a) => (
              <li key={a.href}>
                <TextLink href={a.href} tone="ink" className="ds-t-14">
                  {a.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
