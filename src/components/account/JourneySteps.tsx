import { Fragment } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';

export type JourneyStepsProps = {
  steps: readonly { id: string; label: string }[];
  currentId: string;
  /** In the split layout's narrow column (1024 to 1279px) only the current step keeps its label */
  isCompact?: boolean;
  className?: string;
};

/** Design system numbered stepper: profile, fit check, health assessment */
export function JourneySteps({ steps, currentId, isCompact, className }: JourneyStepsProps) {
  const current = steps.findIndex((s) => s.id === currentId);
  return (
    <ol className={cn('ds-steps-num', className)} aria-label="Sign-up progress">
      {steps.map((s, i) => (
        <Fragment key={s.id}>
          {i > 0 && <li aria-hidden="true" className={cn('ds-sep', i <= current && 'ds-done')} />}
          <li
            className={cn(i < current && 'ds-done', i === current && 'ds-now')}
            aria-current={i === current ? 'step' : undefined}
          >
            <span className="ds-n">
              {i < current ? <Icon name="check" className="ds-ico" /> : i + 1}
            </span>
            <span
              className={cn('whitespace-nowrap', isCompact && i !== current && 'lg:max-xl:sr-only')}
            >
              {s.label}
              {i < current && <span className="sr-only"> (done)</span>}
            </span>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
