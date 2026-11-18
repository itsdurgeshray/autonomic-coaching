'use client';

import { useEffect, useRef } from 'react';
import { LucideIcon } from '@/components/assessment/LucideIcon';
import { SHORT_NAMES } from '@/content/assessment';
import { Qs, SEC, isComplete, sectionUnits, type AssessmentState } from '@/lib/assessment/model';

export type JumpPanelProps = {
  s: AssessmentState;
  isOpen: boolean;
  section: number;
  onSection: (si: number) => void;
  onJump: (i: number) => void;
  onClose: () => void;
};

/** Small panel above the bar: numbered chips for every question reached in a section */
export function JumpPanel({ s, isOpen, section, onSection, onJump, onClose }: JumpPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen)
      (
        ref.current?.querySelector<HTMLElement>('.jc.c') ??
        ref.current?.querySelector<HTMLElement>('.jx')
      )?.focus({ preventScroll: true });
  }, [isOpen, section]);
  if (!isOpen) return <div className="jpop" id="jpop" inert />;
  const sec = SEC[section];
  const units = Qs.filter((q) => q.sectionIndex === section).flatMap((q) =>
    Array.from({ length: q.units }, (_, r) => ({ q, r })),
  );
  const nextOk = section < SEC.length - 1 && SEC[section + 1].start <= s.furthest;
  return (
    <div ref={ref} className="jpop open" id="jpop" role="dialog" aria-labelledby="jpT">
      <div className="jh">
        <button
          type="button"
          className="jn"
          disabled={section === 0}
          onClick={() => onSection(section - 1)}
          aria-label="Previous section"
        >
          <LucideIcon name="chevL" />
        </button>
        <h2 id="jpT">{SHORT_NAMES[sec.id]}</h2>
        <button
          type="button"
          className="jn"
          disabled={!nextOk}
          onClick={() => onSection(section + 1)}
          aria-label="Next section"
        >
          <LucideIcon name="chevR" />
        </button>
        <button type="button" className="jx" onClick={onClose} aria-label="Close">
          <LucideIcon name="x" />
        </button>
      </div>
      <div className="jg">
        {units.map(({ q, r }, k) => {
          const isReached = q.index <= s.furthest;
          const isCur = q.index === s.idx;
          const isAns =
            q.kind === 'quick'
              ? ((s.answers[q.index] ?? {}) as Record<number, number>)[r] !== undefined
              : isComplete(s, q) && !(q.isOptional && s.answers[q.index] === undefined);
          return (
            <button
              key={`${q.index}-${r}`}
              type="button"
              className={`jc ${isAns ? 'a' : ''} ${isCur ? 'c' : ''}`}
              disabled={!isReached}
              onClick={() => onJump(q.index)}
              aria-label={`Question ${k + 1}${isAns ? ', answered' : ''}${isCur ? ', current' : ''}${isReached ? '' : ', locked'}`}
            >
              {k + 1}
            </button>
          );
        })}
      </div>
      <p className="jf">
        ({sectionUnits(s, section)}/{sec.units} answered)
      </p>
    </div>
  );
}
