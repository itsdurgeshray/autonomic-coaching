'use client';

import { LucideIcon } from '@/components/assessment/LucideIcon';
import { assessmentTour } from '@/content/assessmentTour';
import { StageImage } from '@/components/assessment/StageImage';
import {
  ASSESSMENT_SHORT_TITLE,
  ASSESSMENT_TITLE,
  SHORT_NAMES,
  STAGES,
} from '@/content/assessment';
import { LEAF_SVG, leafWord } from '@/lib/assessment/fx';
import {
  Qs,
  SEC,
  TOTAL,
  isSectionDone,
  level,
  minutesLeft,
  percent,
  sectionUnits,
  type AssessmentState,
} from '@/lib/assessment/model';

const pad = (n: number) => String(n).padStart(2, '0');
const grow = (w: number) => (0.85 + (0.3 * w) / 100).toFixed(2);

export type AssessmentHeaderProps = {
  s: AssessmentState;
  shownLeaves: number;
  onMenu: () => void;
  /** Opens the guided tour; the help button only shows on question screens */
  onTour?: () => void;
};

export function AssessmentHeader({ s, shownLeaves, onMenu, onTour }: AssessmentHeaderProps) {
  const isFinal = s.screen === 'complete';
  const q = Qs[s.idx];
  const si = isFinal ? SEC.length - 1 : q.sectionIndex;
  const L = level(s);
  const label =
    s.screen === 'q' ? (
      q.units > 1 ? (
        <>
          <span className="lw">Questions </span>
          {pad(q.firstNumber)} to {pad(q.firstNumber + q.units - 1)}/{TOTAL}
        </>
      ) : (
        <>
          <span className="lw">Question </span>
          {pad(q.firstNumber)}/{TOTAL}
        </>
      )
    ) : isFinal ? (
      `All ${TOTAL} questions answered`
    ) : (
      `${TOTAL} questions · ${SEC.length} sections`
    );
  const cap =
    s.screen === 'q' ? `~${minutesLeft(s)} left · ${percent(s)}%` : `${percent(s)}% completed`;

  return (
    <header className="top" id="top">
      <div className="in">
        <div className="hrow">
          <div className="ttl">
            <h1>
              <span className="full">{ASSESSMENT_TITLE}</span>
              <span className="short">{ASSESSMENT_SHORT_TITLE}</span>
            </h1>
            <p>{label}</p>
          </div>
          <div className="hr">
            <div className="pills">
              {!isFinal && (
                <>
                  <span className="pill sec">{SHORT_NAMES[SEC[si].id]}</span>
                  <span className="pill time">~{minutesLeft(s)} left</span>
                </>
              )}
              <span
                className="pill leaf"
                id="xpPill"
                title={`Every answer is a leaf that helps your ${STAGES[L].name.toLowerCase()} grow`}
              >
                <span className="lf-i" dangerouslySetInnerHTML={{ __html: LEAF_SVG }} />
                <b>{shownLeaves.toLocaleString('en-GB')}</b> <span>{leafWord(shownLeaves)}</span>
              </span>
              {onTour && (
                <button
                  type="button"
                  className="pill help"
                  id="tourBtn"
                  onClick={onTour}
                  aria-label={assessmentTour.open}
                  title={assessmentTour.open}
                >
                  <LucideIcon name="help" />
                </button>
              )}
            </div>
            <p className="pct">
              <b>{percent(s)}%</b> completed
            </p>
            <button type="button" className="menu-btn" onClick={onMenu} aria-haspopup="dialog">
              <LucideIcon name="menu" />
              <span className="sr">Menu</span>
            </button>
          </div>
        </div>
        <div
          className="segs"
          role="progressbar"
          aria-label="Assessment progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent(s)}
        >
          {SEC.map((sec) => {
            const isDone = isSectionDone(s, sec.si);
            const w = isDone ? 100 : Math.round((sectionUnits(s, sec.si) / sec.units) * 100);
            const isCur = sec.si === si && !isFinal;
            return (
              <div key={sec.id} className={`sg ${isDone ? 'done' : ''} ${isCur ? 'cur' : ''}`}>
                <span className="tr">
                  <i style={{ width: `${w}%` }} />
                  {isCur ? (
                    <span
                      className="cr ride"
                      id="rider"
                      style={
                        {
                          left: `${Math.max(6, Math.min(94, w))}%`,
                          '--g': grow(w),
                        } as React.CSSProperties
                      }
                      title={`Your ${STAGES[L].name.toLowerCase()} grows with every answer`}
                    >
                      <StageImage stage={L} />
                    </span>
                  ) : isDone ? (
                    isFinal && sec.si === SEC.length - 1 ? (
                      <span className="cr ride" style={{ left: '94%' }} title="Butterfly">
                        <StageImage stage={9} />
                      </span>
                    ) : null
                  ) : (
                    <span
                      className="cr up"
                      title={`Finish ${sec.name} to become a ${STAGES[sec.si + 1].name}`}
                    >
                      <StageImage stage={sec.si + 1} />
                    </span>
                  )}
                </span>
                <span className="nm">{SHORT_NAMES[sec.id]}</span>
              </div>
            );
          })}
        </div>
        <div className="cap">
          <span>
            <b>{isFinal ? 'All sections complete' : SEC[si].name}</b>
          </span>
          <span>{cap}</span>
        </div>
      </div>
    </header>
  );
}
