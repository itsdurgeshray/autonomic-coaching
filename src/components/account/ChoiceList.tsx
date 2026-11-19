'use client';

import { cn } from '@/lib/cn';
import type { FitQuestion } from '@/content/fitCheck';

export type ChoiceListProps = {
  question: FitQuestion;
  selected: string[];
  /** isPointer is true for mouse or touch clicks, so keyboard users are never moved on automatically */
  onChoose: (id: string, isPointer: boolean) => void;
  /** id of the question heading, so the group is announced with it */
  labelledBy: string;
};

/** Design system choice cards with native radios (one answer) or checkboxes (several) */
export function ChoiceList({ question, selected, onChoose, labelledBy }: ChoiceListProps) {
  const isMulti = question.kind === 'multi';
  return (
    <div
      role={isMulti ? 'group' : 'radiogroup'}
      aria-labelledby={labelledBy}
      className={cn('mt-8 grid gap-2 sm:gap-3', question.options.length > 5 && 'sm:grid-cols-2')}
    >
      {question.options.map((o) => (
        <label key={o.id} className="ds-check-card min-h-[56px] items-center sm:px-5">
          <span className="ds-check">
            <input
              type={isMulti ? 'checkbox' : 'radio'}
              name={question.id}
              value={o.id}
              checked={selected.includes(o.id)}
              onChange={() => undefined}
              onClick={(e) => onChoose(o.id, e.detail > 0)}
            />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="ds-t-16 text-ink">{o.label}</span>
            {o.hint && <span className="ds-t-14 ds-c-3">{o.hint}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}
