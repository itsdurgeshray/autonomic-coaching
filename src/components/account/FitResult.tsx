'use client';

import Image from 'next/image';
import { Button, ButtonLink, TextLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Icon, type IconProps } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { fitCheck, fitOutcome } from '@/content/fitCheck';

/* The first life stage from the health assessment: the journey that starts next */
const FIT_ART = '/assessment/stages/s0.png';

export type FitResultProps = { answers: Record<string, string[]>; onRetake: () => void };

const LOOK: Record<string, { icon: IconProps['name']; tile: string }> = {
  fit: { icon: 'i-check-circle', tile: '' },
  'not-fit': { icon: 'i-info', tile: 'ds-blue' },
  urgent: { icon: 'i-first-aid', tile: 'bg-danger-bg text-danger' },
};

export function FitResult({ answers, onRetake }: FitResultProps) {
  const { outcome, reasons } = fitOutcome(answers);
  const copy = fitCheck.results[outcome];
  const look = LOOK[outcome];

  return (
    <section
      aria-labelledby="fit-result-title"
      className="my-auto flex w-full animate-[rise_.6s_var(--ease)_both] flex-col items-center py-10 text-center lg:py-12"
    >
      {outcome === 'fit' ? (
        <span className="relative grid size-28 place-items-center">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,var(--g-100),transparent)]"
          />
          <Image src={FIT_ART} alt="" width={240} height={240} className="relative size-24" />
        </span>
      ) : (
        <span className={cn('ds-ico-tile ds-lg', look.tile)}>
          <Icon name={look.icon} className="ds-ico" />
        </span>
      )}
      <Eyebrow className="mt-6">{copy.eyebrow}</Eyebrow>
      <Heading as="h1" look="h2" id="fit-result-title" className="mt-3">
        {copy.title}
      </Heading>
      <p className="ds-t-lead ds-c-2 mt-4 max-w-[48ch]">{copy.body}</p>

      {outcome === 'fit' && (
        <div className="ds-card mt-8 w-full text-left">
          <h2 className="ds-t-14 ds-w-500 ds-c-2 border-line-2 border-b px-5 py-3">
            {fitCheck.results.fit.nextTitle}
          </h2>
          <ol className="flex flex-col">
            {fitCheck.results.fit.points.map((p, i) => (
              <li
                key={p}
                className="border-line-2 flex items-center gap-4 border-b px-5 py-4 last:border-0"
              >
                <span
                  aria-hidden="true"
                  className="ds-t-12 ds-num ds-w-500 bg-g-50 text-g-700 grid size-7 shrink-0 place-items-center rounded-full"
                >
                  {i + 1}
                </span>
                <span className="ds-t-16 text-ink">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {outcome === 'not-fit' && (
        <div className="ds-card ds-card-pad mt-8 w-full text-left">
          {reasons.length > 0 && (
            <ul role="list" className="border-line-2 flex flex-col gap-2 border-b pb-5">
              {reasons.map((r) => (
                <li key={r} className="ds-t-14 ds-c-2 flex gap-2.5">
                  <Icon name="i-info" className="ds-ico text-b-700 mt-0.5 shrink-0 text-[16px]" />
                  {fitCheck.results['not-fit'].reasons[r]}
                </li>
              ))}
            </ul>
          )}
          <h2 className="ds-t-14 ds-w-500 text-ink mt-5">
            {fitCheck.results['not-fit'].alternativesTitle}
          </h2>
          <ul role="list" className="mt-3 flex flex-col gap-2">
            {fitCheck.results['not-fit'].alternatives.map((a) => (
              <li key={a.href}>
                <TextLink href={a.href}>
                  {a.label} <Icon name="arrow" className="ds-ico" />
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 flex w-full flex-col items-center gap-2 sm:w-auto">
        {outcome === 'fit' ? (
          <ButtonLink href="/assessment" size="xl" isBlock className="sm:min-w-[300px]">
            {copy.primary} <Icon name="arrow" className="ds-ico" />
          </ButtonLink>
        ) : (
          <Button size="xl" isBlock onClick={onRetake} className="sm:min-w-[300px]">
            <Icon name="i-arrow-counter-clockwise" className="ds-ico" />
            {copy.primary}
          </Button>
        )}
        <ButtonLink href="/account" variant="ghost" size="lg">
          {copy.secondary}
        </ButtonLink>
      </div>
    </section>
  );
}
