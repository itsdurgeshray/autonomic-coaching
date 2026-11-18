'use client';

import Link from 'next/link';
import { LucideIcon } from '@/components/assessment/LucideIcon';
import { StageImage } from '@/components/assessment/StageImage';
import { STAGES } from '@/content/assessment';
import { LEAF_SVG, leafWord } from '@/lib/assessment/fx';
import {
  SEC,
  TOTAL,
  doneUnits,
  level,
  minutesLeft,
  type AssessmentState,
} from '@/lib/assessment/model';

const Dots = () => (
  <span className="dots" aria-hidden="true">
    {Array.from({ length: 9 }, (_, i) => (
      <i key={i} />
    ))}
  </span>
);

const StageRow = ({ upto }: { upto: number }) => (
  <div className="strip" aria-label="Life stages">
    {STAGES.map((st, i) => (
      <span key={st.name} className={i <= upto ? 'sth on' : 'sth'} title={st.name}>
        <StageImage stage={i} />
      </span>
    ))}
  </div>
);

export type IntroPanelProps = {
  s: AssessmentState;
  onStart: () => void;
  onResume: () => void;
  onRestart: () => void;
  onResults: () => void;
};

export function IntroPanel({ s, onStart, onResume, onRestart, onResults }: IntroPanelProps) {
  const n = doneUnits(s);
  const isResume = n > 0;
  const isFinished = s.earned.length === SEC.length;
  const L = level(s);
  return (
    <main className="stage center" id="main">
      <div className="panel">
        <p className="eyeg">
          <Dots />
          Online Health Assessment · Reviewed by your care team
        </p>
        <h2>{isResume ? 'Welcome back' : 'Your health assessment, one section at a time'}</h2>
        <p className="ip">
          {isResume
            ? `Your ${STAGES[L].name.toLowerCase()} has eaten ${s.leaves.toLocaleString('en-GB')} ${leafWord(s.leaves)} so far. We’ll take you straight to where you left off.`
            : 'Answer at your own pace. Every answer is a leaf that feeds your little egg, and every section you finish helps it grow into its next stage, all the way to a butterfly.'}
        </p>
        <div className="facts">
          <span>
            <b>{isResume ? `${n} of ${TOTAL}` : TOTAL}</b> questions
          </span>
          <span>
            About <b>{minutesLeft(s)}</b>
          </span>
          <span>
            <b>{SEC.length}</b> sections
          </span>
        </div>
        {!isResume && (
          <div className="mech">
            <div>
              <span className="mi" style={{ background: '#f5fbec' }}>
                <span
                  className="lf-i"
                  style={{ width: 24, height: 24 }}
                  dangerouslySetInnerHTML={{ __html: LEAF_SVG }}
                />
              </span>
              <b>A leaf an answer</b>
              <span>Each one feeds your little egg</span>
            </div>
            <div>
              <span className="mi" style={{ background: 'var(--g-50)' }}>
                <StageImage stage={3} />
              </span>
              <b>Egg to butterfly</b>
              <span>It grows a stage every section</span>
            </div>
            <div>
              <span
                className="mi"
                style={{ background: 'var(--teal-50)', color: 'var(--teal-600)' }}
              >
                <LucideIcon name="sparkles" />
              </span>
              <b>Health discoveries</b>
              <span>One after every section</span>
            </div>
            <div>
              <span className="mi" style={{ background: 'var(--b-25)', color: 'var(--b-700)' }}>
                <LucideIcon name="exit" />
              </span>
              <b>Pause any time</b>
              <span>Your progress is saved</span>
            </div>
          </div>
        )}
        <StageRow upto={L} />
        <div className="ctas">
          {isFinished ? (
            <>
              <button type="button" className="cta" onClick={onResults}>
                See my results <LucideIcon name="right" />
              </button>
              <button type="button" className="save" onClick={onRestart}>
                Start over
              </button>
            </>
          ) : isResume ? (
            <>
              <button type="button" className="cta" onClick={onResume}>
                Continue <LucideIcon name="right" />
              </button>
              <button type="button" className="save" onClick={onRestart}>
                Start over
              </button>
            </>
          ) : (
            <button type="button" className="cta" onClick={onStart}>
              Start Assessment <LucideIcon name="right" />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export type SavedPanelProps = { s: AssessmentState; onResume: () => void; onHome: () => void };

export function SavedPanel({ s, onResume, onHome }: SavedPanelProps) {
  const L = level(s);
  return (
    <main className="stage center" id="main">
      <div className="panel">
        <p className="eyeg">
          <Dots />
          Draft saved
        </p>
        <h2>Your progress is saved</h2>
        <p className="ip">
          Come back any time. Your answers, leaves, stages and discoveries are kept, and we’ll take
          you straight to where you left off.
        </p>
        <div className="stats">
          <div>
            <b>
              {doneUnits(s)}/{TOTAL}
            </b>
            <span>answered</span>
          </div>
          <div>
            <b>{s.leaves.toLocaleString('en-GB')}</b>
            <span>{leafWord(s.leaves)} eaten</span>
          </div>
          <div>
            <b>{STAGES[L].name}</b>
            <span>stage {L + 1} of 10</span>
          </div>
        </div>
        <div className="ctas">
          <button type="button" className="cta" onClick={onResume}>
            Continue <LucideIcon name="right" />
          </button>
          <Link className="save" href="/account">
            Go to my account
          </Link>
          <button type="button" className="save" onClick={onHome}>
            Back to start
          </button>
        </div>
      </div>
    </main>
  );
}

export type CompletePanelProps = { s: AssessmentState; onFacts: () => void; onReview: () => void };

export function CompletePanel({ s, onFacts, onReview }: CompletePanelProps) {
  return (
    <main className="stage center" id="main">
      <div className="panel">
        <div className="cmp-art">
          <StageImage stage={9} />
        </div>
        <p className="eyeg">
          <Dots />
          Stage 10 of 10 · Assessment complete
        </p>
        <h2>Your butterfly has emerged</h2>
        <p className="ip">
          You answered all {TOTAL} questions, and every answer helped it grow. Your answers are
          reviewed before your first call, and we’ll be in touch to arrange it.
        </p>
        <div className="stats">
          <div>
            <b>{s.leaves.toLocaleString('en-GB')}</b>
            <span>{leafWord(s.leaves)} eaten</span>
          </div>
          <div>
            <b>10/10</b>
            <span>life stages</span>
          </div>
          <div>
            <b>{s.facts.length}</b>
            <span>discoveries</span>
          </div>
        </div>
        <StageRow upto={9} />
        <div className="ctas">
          <Link className="cta" href="/account">
            Go to my account <LucideIcon name="right" />
          </Link>
          <button type="button" className="save" onClick={onFacts}>
            See my discoveries
          </button>
          <button type="button" className="save" onClick={onReview}>
            Review my answers
          </button>
        </div>
      </div>
    </main>
  );
}
