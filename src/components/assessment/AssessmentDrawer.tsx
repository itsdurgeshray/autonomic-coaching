'use client';

import { useEffect, useRef } from 'react';
import { LucideIcon } from '@/components/assessment/LucideIcon';
import { StageImage } from '@/components/assessment/StageImage';
import { STAGES, THEMES } from '@/content/assessment';
import { leafWord } from '@/lib/assessment/fx';
import {
  Qs,
  SEC,
  TOTAL,
  doneUnits,
  factById,
  isComplete,
  isSectionDone,
  level,
  sectionUnits,
  type AssessmentState,
} from '@/lib/assessment/model';

export type DrawerKind = 'menu' | 'jump' | 'collection' | null;

export type AssessmentDrawerProps = {
  s: AssessmentState;
  kind: DrawerKind;
  tab: 'stages' | 'facts';
  openSection: number;
  isLargeText: boolean;
  isSoundOn: boolean;
  onClose: () => void;
  onTab: (t: 'stages' | 'facts') => void;
  onOpenSection: (si: number) => void;
  onJump: (i: number) => void;
  onJumpPanel: () => void;
  onText: () => void;
  onSound: () => void;
  onExit: () => void;
};

export function AssessmentDrawer(p: AssessmentDrawerProps) {
  const { s, kind } = p;
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (kind) closeRef.current?.focus();
  }, [kind]);
  const L = level(s);
  const close = (
    <button ref={closeRef} type="button" className="x" onClick={p.onClose} aria-label="Close">
      <LucideIcon name="x" />
    </button>
  );
  let title = '';
  let sub = '';
  let body: React.ReactNode = null;
  if (kind === 'menu') {
    title = 'Menu';
    sub = `${doneUnits(s)} of ${TOTAL} answered · ${s.leaves.toLocaleString('en-GB')} ${leafWord(s.leaves)}`;
    body = (
      <>
        <button type="button" className="mrow" onClick={p.onJumpPanel}>
          <LucideIcon name="list" />
          <span>
            Jump to a question<small>Go back to any question you have reached</small>
          </span>
          <LucideIcon name="chevR" />
        </button>
        <button
          type="button"
          className="mrow"
          role="switch"
          aria-checked={p.isLargeText}
          onClick={p.onText}
        >
          <LucideIcon name="type" />
          <span>Larger text</span>
          <span className="sw" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="mrow"
          role="switch"
          aria-checked={p.isSoundOn}
          onClick={p.onSound}
        >
          <LucideIcon name={p.isSoundOn ? 'vol' : 'mute'} />
          <span>Sound effects</span>
          <span className="sw" aria-hidden="true" />
        </button>
        <button type="button" className="mrow" onClick={p.onExit}>
          <LucideIcon name="exit" />
          <span>
            Save draft and exit<small>Your answers, leaves and stages are kept</small>
          </span>
        </button>
      </>
    );
  } else if (kind === 'jump') {
    title = 'Jump to a question';
    sub = `${doneUnits(s)} of ${TOTAL} answered`;
    body = SEC.map((sec) => {
      const isUnlocked = sec.start <= s.furthest;
      const isDone = isSectionDone(s, sec.si);
      const isOpen = p.openSection === sec.si && isUnlocked;
      return (
        <div
          key={sec.id}
          className={`acc ${isDone ? 'done' : ''} ${isUnlocked ? '' : 'lock'} ${isOpen ? 'open' : ''}`}
        >
          <button
            type="button"
            disabled={!isUnlocked}
            aria-expanded={isOpen}
            onClick={() => p.onOpenSection(isOpen ? -1 : sec.si)}
          >
            <span className="ic">
              <LucideIcon name={isUnlocked ? (isDone ? 'check' : sec.icon) : 'lock'} />
            </span>
            <span className="tx">
              <b>{sec.name}</b>
              <span>
                {isUnlocked
                  ? `${sectionUnits(s, sec.si)} of ${sec.units} answered`
                  : 'Opens when you reach it'}
              </span>
            </span>
            {isUnlocked && <LucideIcon name="chev" className="chev" />}
          </button>
          <div className="pnl">
            <div>
              <div className="qchips">
                {Qs.filter((q) => q.sectionIndex === sec.si).map((q) => {
                  const isReached = q.index <= s.furthest;
                  const isAns =
                    isComplete(s, q) && !(q.isOptional && s.answers[q.index] === undefined);
                  const isCur = q.index === s.idx && s.screen === 'q';
                  const label =
                    q.units > 1
                      ? `${q.firstNumber} to ${q.firstNumber + q.units - 1}`
                      : String(q.firstNumber);
                  return (
                    <button
                      key={q.index}
                      type="button"
                      className={`qc ${isAns ? 'a' : ''} ${isCur ? 'c' : ''}`}
                      disabled={!isReached}
                      onClick={() => p.onJump(q.index)}
                      aria-label={q.units > 1 ? `Questions ${label}` : `Question ${label}`}
                    >
                      {isReached ? label : <LucideIcon name="lock" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else if (kind === 'collection') {
    title = 'Your collection';
    sub = `${s.leaves.toLocaleString('en-GB')} ${leafWord(s.leaves)} eaten · stage ${L + 1} of 10`;
    body =
      p.tab === 'stages' ? (
        <div className="bgrid">
          {STAGES.map((st, i) => (
            <div
              key={st.name}
              className={`bcell ${i <= L ? 'got' : i === L + 1 ? 'next' : 'lock'}`}
            >
              <span className={i <= L ? 'sth on' : 'sth'} style={{ width: 72, height: 72 }}>
                <StageImage stage={i} />
              </span>
              <b>{st.name}</b>
              <span>{i <= L ? 'Reached' : i === L + 1 ? 'Next stage' : 'Locked'}</span>
            </div>
          ))}
        </div>
      ) : s.facts.length ? (
        <div className="fl">
          {s.facts.map((r) => {
            const f = factById(r.id);
            if (!f) return null;
            return (
              <div
                key={r.id}
                className="fcard"
                style={{ '--c': THEMES[r.si].accent } as React.CSSProperties}
              >
                <p className="k">{SEC[r.si].name}</p>
                <h3>{f.t}</h3>
                <p>{f.b}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="empty">Finish your first section to unlock a health discovery.</p>
      );
  }

  return (
    <>
      <div className={kind ? 'scrim open' : 'scrim'} onClick={p.onClose} aria-hidden="true" />
      <aside
        className={`drawer ${kind === 'menu' ? 'sheet' : ''} ${kind ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dTitle"
        inert={!kind}
      >
        {kind && (
          <>
            <div className="dh">
              <div>
                <h2 id="dTitle">{title}</h2>
                <p>{sub}</p>
              </div>
              {close}
            </div>
            {kind === 'collection' && (
              <div className="tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={p.tab === 'stages'}
                  onClick={() => p.onTab('stages')}
                >
                  Life stages<span>{L + 1}/10</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={p.tab === 'facts'}
                  onClick={() => p.onTab('facts')}
                >
                  Discoveries<span>{s.facts.length}</span>
                </button>
              </div>
            )}
            <div className="db">{body}</div>
          </>
        )}
      </aside>
    </>
  );
}
