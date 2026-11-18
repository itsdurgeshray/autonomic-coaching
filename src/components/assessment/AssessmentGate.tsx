'use client';

import { AssessmentApp } from '@/components/assessment/AssessmentApp';
import { FlowShell } from '@/components/account/FlowShell';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { journeySteps } from '@/content/account';
import { useAccount } from '@/lib/account/store';

export type AssessmentGateProps = { brand: string };

/** The health assessment opens once the fit check says coaching is a good fit */
export function AssessmentGate({ brand }: AssessmentGateProps) {
  const { intake } = useAccount();
  if (intake.status === 'qualified') return <AssessmentApp />;
  const isDone = intake.status === 'not-fit' || intake.status === 'urgent';
  return (
    <FlowShell
      brand={brand}
      steps={journeySteps}
      currentId="assessment"
      exit={{ label: 'Go to my account', href: '/account' }}
    >
      <section
        aria-labelledby="gate-title"
        className="mx-auto flex w-full max-w-[600px] flex-col items-center text-center"
      >
        <span className="bg-g-50 grid size-16 place-items-center rounded-2xl">
          <Icon name="i-lock-key" className="fill-g-700 size-8" />
        </span>
        <Eyebrow className="mt-6">Health assessment</Eyebrow>
        <Heading as="h1" id="gate-title" look="h2" className="mt-2">
          {isDone ? 'The assessment opens for a good fit' : 'Take the fit check first'}
        </Heading>
        <p className="text-16 text-ink-2 mt-4 max-w-[52ch]">
          {isDone
            ? 'Your fit check suggests coaching may not suit what you need right now. If things have changed, retake it at any time.'
            : 'Six short questions show whether one-to-one coaching fits what you need. If it does, the health assessment opens straight away.'}
        </p>
        <ButtonLink
          href="/onboarding/fit-check"
          size="xl"
          className="mt-10 w-full sm:w-auto sm:min-w-[280px]"
        >
          {isDone ? 'Retake the fit check' : 'Start the fit check'}{' '}
          <Icon name="arrow" className="ds-ico" />
        </ButtonLink>
      </section>
    </FlowShell>
  );
}
