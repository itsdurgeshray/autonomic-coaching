'use client';

import { LucideIcon } from '@/components/assessment/LucideIcon';
import { RichText, termsIn } from '@/components/assessment/RichText';
import { QuickRound } from '@/components/assessment/QuickRound';
import { CUES, FREQ } from '@/content/assessment';
import {
  QUICK_ROUND_BONUS,
  SEC,
  canContinue,
  optionsFor,
  type AssessmentState,
  type Q,
} from '@/lib/assessment/model';

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const Tick = () => (
  <span className="rd">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
);

export type QuestionScreenProps = {
  s: AssessmentState;
  q: Q;
  isNew: boolean;
  openTerm: string | null;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  textRef: React.RefObject<HTMLTextAreaElement | null>;
  onTerm: (key: string) => void;
  onAnswer: (v: number, el: HTMLElement) => void;
  onRow: (r: number, j: number, el: HTMLElement) => void;
  onAll: (el: HTMLElement) => void;
  onBack: () => void;
  onNext: () => void;
};

function Cue({ q, openTerm }: { q: Q; openTerm: string | null }) {
  const box = (t: string, body: React.ReactNode) => (
    <div className="cuec">
      <LucideIcon name="help" />
      <div>
        <b>{t}</b>
        {body}
      </div>
    </div>
  );
  const k =
    openTerm ??
    termsIn(q.kind === 'quick' ? (q.rows ?? []).join(' ') : `${q.title} ${q.help ?? ''}`)[0];
  if (k && CUES[k]) return box(cap(k), <p>{`${CUES[k][0]} ${CUES[k][1]}`}</p>);
  const legend =
    q.kind === 'freq'
      ? FREQ
      : q.kind === 'quick' && (q.legend ?? []).some((o) => o[1])
        ? q.legend
        : null;
  if (legend)
    return box(
      'What the answers mean',
      <dl>
        {legend.map(([a, b]) => (
          <div key={a} className="contents">
            <dt>{a}</dt>
            <dd>{b}</dd>
          </div>
        ))}
      </dl>,
    );
  return box('Why we ask', <p>{SEC[q.sectionIndex].why}</p>);
}

export function QuestionScreen({
  s,
  q,
  isNew,
  openTerm,
  titleRef,
  textRef,
  onTerm,
  onAnswer,
  onRow,
  onAll,
  onBack,
  onNext,
}: QuestionScreenProps) {
  const v = s.answers[q.index];
  const isQuick = q.kind === 'quick';
  const opts = optionsFor(q);
  return (
    <main className="stage" id="main">
      <div className={isNew ? 'qz rise' : 'qz'} id="qz">
        <p className="eyeg">
          <span className="dots" aria-hidden="true">
            {Array.from({ length: 9 }, (_, i) => (
              <i key={i} />
            ))}
          </span>
          {isQuick
            ? `Quick round · Answer all ${q.units} for ${QUICK_ROUND_BONUS} bonus leaves`
            : 'Building Personalised Health Profile'}
        </p>
        <div className="qrow">
          <button
            type="button"
            className="arrow"
            onClick={onBack}
            disabled={q.index === 0}
            aria-label="Previous question"
          >
            <LucideIcon name="chevL" />
          </button>
          <h2 className="qtitle" id="qt" tabIndex={-1} ref={titleRef}>
            {isQuick ? (
              'A few quick ones'
            ) : (
              <RichText text={q.title} openTerm={openTerm} onTerm={onTerm} />
            )}
          </h2>
          <button
            type="button"
            className="arrow"
            onClick={onNext}
            disabled={!canContinue(s, q)}
            aria-label="Next question"
          >
            <LucideIcon name="chevR" />
          </button>
        </div>
        {!isQuick && q.help && (
          <p className="qhelp">
            <RichText text={q.help} openTerm={openTerm} onTerm={onTerm} />
          </p>
        )}
        {isQuick && (
          <QuickRound s={s} q={q} openTerm={openTerm} onTerm={onTerm} onRow={onRow} onAll={onAll} />
        )}
        {(q.kind === 'single' || q.kind === 'freq') && (
          <div className="opts" role="radiogroup" aria-labelledby="qt">
            {opts.map((l, j) => (
              <button
                key={l}
                type="button"
                className="opt"
                role="radio"
                aria-checked={v === j}
                data-v={j}
                onClick={(e) => onAnswer(j, e.currentTarget)}
              >
                <Tick />
                <span className="tx">
                  <span className="l">{l}</span>
                </span>
              </button>
            ))}
          </div>
        )}
        {q.kind === 'multi' && (
          <div className="opts multi" role="group" aria-labelledby="qt">
            {opts.map((l, j) => (
              <button
                key={l}
                type="button"
                className="opt"
                role="checkbox"
                aria-checked={Array.isArray(v) && v.includes(j)}
                data-v={j}
                onClick={(e) => onAnswer(j, e.currentTarget)}
              >
                <Tick />
                <span className="tx">
                  <span className="l">{l}</span>
                </span>
              </button>
            ))}
          </div>
        )}
        {q.kind === 'text' && (
          <textarea
            ref={textRef}
            className="ta"
            id="ta"
            aria-labelledby="qt"
            placeholder="Type here (optional)"
            defaultValue={typeof v === 'string' ? v : ''}
          />
        )}
      </div>
      <aside className={isQuick ? 'cue wide' : 'cue'} id="cue" aria-live="polite">
        <Cue q={q} openTerm={openTerm} />
      </aside>
    </main>
  );
}
