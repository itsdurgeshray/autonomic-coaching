'use client';

import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from '@/components/assessment/LucideIcon';
import { StageImage } from '@/components/assessment/StageImage';
import { STAGES, THEMES } from '@/content/assessment';
import { sfx } from '@/lib/assessment/sound';
import { SEC, factById } from '@/lib/assessment/model';

const COUNTDOWN = 10;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (ms: number) =>
  new Promise((r) => window.setTimeout(r, reduced() ? Math.min(ms, 120) : ms));

export type RewardOverlayProps = {
  /** Section just finished, or null when closed */
  section: number | null;
  stage: number;
  factId: string | null;
  onContinue: () => void;
  onExit: () => void;
  onAnnounce: (m: string) => void;
};

/** Section complete: the creature grows a stage, shows a discovery, then flips to the next stage locked */
export function RewardOverlay({
  section,
  stage,
  factId,
  onContinue,
  onExit,
  onAnnounce,
}: RewardOverlayProps) {
  const [phase, setPhase] = useState<string[]>([]);
  const [left, setLeft] = useState<number | null>(null);
  const contRef = useRef<HTMLButtonElement>(null);
  const continueRef = useRef(onContinue);
  useEffect(() => {
    continueRef.current = onContinue;
  });

  useEffect(() => {
    if (section === null) return;
    let isAlive = true;
    const run = async () => {
      await wait(80);
      if (!isAlive) return;
      setPhase(['p1']);
      await wait(800);
      if (!isAlive) return;
      setPhase(['p1', 'p2']);
      sfx.badge();
      await wait(700);
      if (!isAlive) return;
      setPhase(['p1', 'p2', 'p3']);
      contRef.current?.focus({ preventScroll: true });
      const f = factId ? factById(factId) : undefined;
      onAnnounce(`New stage unlocked: ${STAGES[stage].name}. Did you know? ${f?.t ?? ''}.`);
      await wait(2400);
      if (!isAlive) return;
      if (section + 1 < SEC.length) {
        setPhase(['p1', 'p2', 'p3', 'flipped']);
        sfx.flip();
      }
      await wait(1100);
      if (isAlive) setLeft(COUNTDOWN);
    };
    void run();
    return () => {
      isAlive = false;
    };
  }, [section, stage, factId, onAnnounce]);

  useEffect(() => {
    if (left === null) return;
    if (left <= 0) {
      continueRef.current();
      return;
    }
    const t = window.setTimeout(() => setLeft((n) => (n === null ? null : n - 1)), 1000);
    return () => window.clearTimeout(t);
  }, [left]);

  if (section === null) return <div className="reward" />;
  const next = section + 1 < SEC.length ? section + 1 : -1;
  const fact = factId ? factById(factId) : undefined;
  const th = THEMES[section];
  const isLast = next < 0;

  return (
    <div
      className={`reward open ${phase.join(' ')}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rwT"
      style={{ '--acc': th.accent, '--acc-l': th.light, '--acc-d': th.deep } as React.CSSProperties}
    >
      <div className="rw" role="document">
        <div className="bwrap">
          <span className="halo" />
          <span className="rays" />
          <span className="bsil">
            <StageImage stage={stage} kind="badge" mode="glow" />
          </span>
          <span className="fwrap">
            <span className="flip">
              <span className="face front">
                <StageImage stage={stage} kind="badge" />
              </span>
              {next >= 0 && (
                <span className="face back">
                  <StageImage stage={stage + 1} kind="badge" mode="lock" />
                  <span className="lk">
                    <LucideIcon name="lock" />
                  </span>
                </span>
              )}
            </span>
          </span>
        </div>
        <div className="lbl st s2">
          <div className="now">
            <small>New stage unlocked</small>
            <b id="rwT">{STAGES[stage].name}</b>
            <p>Your answers in {SEC[section].name} helped it grow.</p>
          </div>
          {next >= 0 && (
            <div className="nx">
              <small>
                <LucideIcon name="lock" />
                Next stage
              </small>
              <b>{STAGES[stage + 1].name}</b>
              <p>Every answer in {SEC[next].name} helps it grow there.</p>
            </div>
          )}
        </div>
        {fact && (
          <div className="rfact st s3">
            <p className="feye">
              <LucideIcon name="sparkles" />
              Did you know?
            </p>
            <h3>{fact.t}</h3>
            <p className="fb">{fact.b}</p>
          </div>
        )}
        <div className="acts st s3">
          <button ref={contRef} type="button" className="cta" onClick={onContinue}>
            {isLast ? 'See my results' : `Continue to ${SEC[next].name}`}{' '}
            <LucideIcon name="right" />
          </button>
          <button type="button" className="save" onClick={onExit}>
            Save &amp; Take a Break
          </button>
        </div>
        <p className="cd st s3" aria-live="off">
          {left !== null ? (
            <>
              Moving to {isLast ? 'your results' : 'the next question'} in <b>{left}s</b>
              <button type="button" onClick={() => setLeft(null)}>
                Stay here
              </button>
            </>
          ) : phase.includes('p3') ? (
            'Continue when you are ready'
          ) : null}
        </p>
      </div>
    </div>
  );
}
