'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import { fitCheck } from '@/content/fitCheck';
import type { AssessmentSummary } from '@/lib/assessment/summary';
import type { IntakeState } from '@/lib/account/types';

export type NextStepCardProps = { intake: IntakeState; assessment: AssessmentSummary | null };

type Step = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  progress?: number;
  art?: string;
};

function pick(intake: IntakeState, a: AssessmentSummary | null): Step {
  const answered = Object.keys(intake.answers).length;
  const total = fitCheck.questions.length;
  if (
    intake.status === 'not-started' ||
    intake.status === 'skipped' ||
    intake.status === 'in-progress'
  ) {
    return {
      eyebrow: intake.status === 'skipped' ? 'You skipped this step' : 'Next step',
      title: answered ? 'Finish your fit check' : 'Take the fit check',
      body: 'Six short questions show whether one-to-one coaching fits what you need right now. Your answers are saved, so you can pick up where you left off.',
      cta: answered ? 'Continue the fit check' : 'Start the fit check',
      href: '/onboarding/fit-check',
      progress: answered ? Math.round((answered / total) * 100) : undefined,
    };
  }
  if (intake.status === 'not-fit' || intake.status === 'urgent') {
    return {
      eyebrow: 'Fit check',
      title:
        intake.status === 'urgent'
          ? 'Please get medical help first'
          : 'Coaching may not be the right fit right now',
      body: 'If your situation has changed, you can retake the fit check at any time.',
      cta: 'See my result',
      href: '/onboarding/fit-check',
    };
  }
  if (!a || a.answered === 0) {
    return {
      eyebrow: 'You look like a good fit',
      title: 'Start your health assessment',
      body: 'Nine short sections build the full picture your coach works from. Pause any time; your answers are saved.',
      cta: 'Start my health assessment',
      href: '/assessment',
      art: '/assessment/stages/s0.png',
    };
  }
  if (!a.isComplete) {
    return {
      eyebrow: `Stage ${a.stage + 1} of 10 · ${a.stageName}`,
      title: 'Continue your health assessment',
      body: `${a.answered} of ${a.total} questions answered. We’ll take you straight to where you left off.`,
      cta: 'Continue',
      href: '/assessment',
      progress: a.percent,
      art: `/assessment/stages/s${a.stage}.png`,
    };
  }
  return {
    eyebrow: 'Assessment complete',
    title: 'Your butterfly has emerged',
    body: 'Your answers are reviewed before your first call. We’ll be in touch to arrange it.',
    cta: 'See my discoveries',
    href: '/assessment',
    art: '/assessment/stages/s9.png',
  };
}

export function NextStepCard({ intake, assessment }: NextStepCardProps) {
  const s = pick(intake, assessment);
  return (
    <section
      aria-labelledby="next-step-title"
      className={cn(
        'ds-card ds-raised border-g-100 flex flex-col gap-6 overflow-hidden bg-[linear-gradient(120deg,var(--g-50)_0%,var(--card)_60%)] p-6 md:grid md:items-center md:gap-x-8 md:p-8',
        s.art
          ? 'md:grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)_auto]'
          : 'md:grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto]',
      )}
    >
      {s.art && (
        <Image
          src={s.art}
          alt=""
          width={96}
          height={96}
          className="size-20 shrink-0 object-contain md:size-24"
        />
      )}
      <div className="min-w-0 flex-1">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 id="next-step-title" className="ds-t-h2 mt-1 md:!text-[32px] md:!leading-[40px]">
          {s.title}
        </h2>
        <p className="ds-t-16 ds-c-2 mt-2 max-w-[60ch]">{s.body}</p>
        {s.progress !== undefined && (
          <div className="mt-4 flex max-w-[420px] items-center gap-3">
            <span
              className="ds-bar flex-1"
              role="progressbar"
              aria-valuenow={s.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progress"
            >
              <i style={{ width: `${s.progress}%` }} />
            </span>
            <span className="ds-t-12 ds-c-3 ds-num">{s.progress}%</span>
          </div>
        )}
      </div>
      <ButtonLink
        href={s.href}
        size="xl"
        isBlock
        className={cn(
          'md:w-auto md:justify-self-start lg:col-start-auto',
          s.art && 'md:col-start-2',
        )}
      >
        {s.cta} <Icon name="arrow" className="ds-ico" />
      </ButtonLink>
    </section>
  );
}
