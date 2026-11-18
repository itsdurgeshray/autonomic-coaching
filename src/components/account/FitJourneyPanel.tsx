'use client';

import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { fitCheck, type FitQuestion } from '@/content/fitCheck';
import { useAccount } from '@/lib/account/store';

/** Photo-panel content beside the fit check: the six topics, which are answered, and what was chosen */
export function FitJourneyPanel() {
  const { intake } = useAccount();
  const questions: FitQuestion[] = fitCheck.questions;
  const isDone = ['qualified', 'not-fit', 'urgent'].includes(intake.status);
  const current = intake.status === 'in-progress' ? intake.step : isDone ? questions.length : -1;

  return (
    <div className="flex h-full flex-col">
      <p className="ds-t-h3 text-g-200">{fitCheck.eyebrow}</p>
      <h2 className="ds-t-title mt-2 text-white">{fitCheck.panel.title}</h2>
      <ol className="mt-8 flex flex-col">
        {questions.map((q, i) => {
          const picked = (intake.answers[q.id] ?? [])
            .map((id) => q.options.find((o) => o.id === id)?.label)
            .filter(Boolean)
            .join(', ');
          const state = i < current || (isDone && picked) ? 'done' : i === current ? 'now' : 'next';
          return (
            <li
              key={q.id}
              aria-current={state === 'now' ? 'step' : undefined}
              className="relative flex gap-4 pb-6 last:pb-0"
            >
              {i < questions.length - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-8 bottom-1 left-[13px] w-px',
                    state === 'done' ? 'bg-g-300' : 'bg-white/20',
                  )}
                />
              )}
              <span
                aria-hidden="true"
                className={cn(
                  'ds-t-12 ds-num grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-300',
                  state === 'done' && 'border-g-300 bg-g-300 text-g-950',
                  state === 'now' && 'text-g-950 border-white bg-white',
                  state === 'next' && 'border-white/30 text-white/60',
                )}
              >
                {state === 'done' ? <Icon name="check" className="ds-ico text-[14px]" /> : i + 1}
              </span>
              <span className="min-w-0 pt-0.5">
                <span
                  className={cn(
                    'ds-t-16 block',
                    state === 'next' ? 'text-white/60' : 'ds-w-500 text-white',
                  )}
                >
                  {q.kicker}
                  {state === 'done' && <span className="sr-only"> (answered)</span>}
                </span>
                {picked && state !== 'next' && (
                  <span className="ds-t-14 mt-0.5 line-clamp-2 block text-white/70">{picked}</span>
                )}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="ds-t-14 mt-auto flex max-w-[40ch] items-start gap-2 pt-8 text-white/70">
        <Icon name="i-lock-simple" className="ds-ico text-g-200 mt-[3px] shrink-0 text-[16px]" />
        {fitCheck.panel.saved}
      </p>
    </div>
  );
}
