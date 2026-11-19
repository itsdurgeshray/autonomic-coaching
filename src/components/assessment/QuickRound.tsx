'use client';

import { RichText } from '@/components/assessment/RichText';
import { LucideIcon } from '@/components/assessment/LucideIcon';
import { isAllSet, type AssessmentState, type Q } from '@/lib/assessment/model';

export type QuickRoundProps = {
  s: AssessmentState;
  q: Q;
  openTerm: string | null;
  onTerm: (key: string) => void;
  onRow: (r: number, j: number, el: HTMLElement) => void;
  onAll: (el: HTMLElement) => void;
};

/** Several short questions on one screen, each answered with a row of option cards */
export function QuickRound({ s, q, openTerm, onTerm, onRow, onAll }: QuickRoundProps) {
  const a = (s.answers[q.index] ?? {}) as Record<number, number>;
  const legend = q.legend ?? [];
  const n = legend.length;
  return (
    <div
      className="qk"
      id="quick"
      style={{ '--n': n, '--m': n <= 3 ? n : n === 4 ? 2 : 1 } as React.CSSProperties}
    >
      <div className="qk-bar">
        <p>
          {q.units} short questions{q.help ? `. ${q.help}` : ''}
        </p>
        <button
          type="button"
          className="qk-none"
          aria-pressed={isAllSet(s, q)}
          onClick={(e) => onAll(e.currentTarget)}
        >
          <LucideIcon name="check" />
          {q.allLabel}
        </button>
      </div>
      {(q.rows ?? []).map((t, r) => {
        const isOk = a[r] !== undefined;
        return (
          <div key={t} className={isOk ? 'qk-q ok' : 'qk-q'} data-row={r}>
            <p className="qk-t" id={`qk${r}`}>
              <span className="n" aria-hidden="true">
                {isOk ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  r + 1
                )}
              </span>
              <span>
                <RichText text={t} openTerm={openTerm} onTerm={onTerm} />
              </span>
            </p>
            <div className="opts row" role="radiogroup" aria-labelledby={`qk${r}`}>
              {legend.map(([o, meaning], j) => (
                <button
                  key={o}
                  type="button"
                  className="opt"
                  role="radio"
                  aria-checked={a[r] === j}
                  aria-describedby={meaning ? `tip-${q.index}-${r}-${j}` : undefined}
                  onClick={(e) => onRow(r, j, e.currentTarget)}
                >
                  <span className="rd">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="tx">
                    <span className="l">{o}</span>
                  </span>
                  {meaning && (
                    <span className="tip" role="tooltip" id={`tip-${q.index}-${r}-${j}`}>
                      {meaning}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
