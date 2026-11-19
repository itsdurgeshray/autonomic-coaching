'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { LucideIcon } from '@/components/assessment/LucideIcon';
import { assessmentTour as T } from '@/content/assessmentTour';

export type QuestionnaireTourProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Box = { top: number; left: number; width: number; height: number };

const PAD = 6;
const GAP = 14;
const CARD_W = 336;

/** First visible element for a step's selector list */
function findTarget(selector: string): HTMLElement | null {
  for (const sel of selector.split(',')) {
    const el = document.querySelector<HTMLElement>(sel.trim());
    if (el && el.getClientRects().length && el.offsetWidth > 0) return el;
  }
  return null;
}

/**
 * Spotlight tour of the assessment screen: the page dims, the control gets a green ring,
 * and a card beside it explains it. Esc or Skip ends it; focus returns to the help button.
 */
export function QuestionnaireTour({ isOpen, onClose }: QuestionnaireTourProps) {
  const [step, setStep] = useState(0);
  const [box, setBox] = useState<Box | null>(null);
  /* Starts in the middle of the screen so the first placement never slides in from a corner */
  const [card, setCard] = useState<{ top: number; left: number; dock: 'top' | 'bottom' | null }>(
    () =>
      typeof window === 'undefined'
        ? { top: 0, left: 0, dock: null }
        : {
            top: window.innerHeight / 2 - 120,
            left: window.innerWidth / 2 - CARD_W / 2,
            dock: window.innerWidth < 640 ? 'bottom' : null,
          },
  );
  const cardRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  /* Only steps whose control is on screen at this width (phones hide some bottom-bar tools) */
  const order = useMemo(
    () =>
      isOpen && typeof document !== 'undefined'
        ? T.steps.map((_, i) => i).filter((i) => findTarget(T.steps[i].target))
        : T.steps.map((_, i) => i),
    [isOpen],
  );
  const total = order.length;
  const s = T.steps[order[Math.min(step, total - 1)] ?? 0];
  const isLast = step >= total - 1;

  const measure = useCallback(() => {
    const el = findTarget(s.target);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const ch = cardRef.current?.offsetHeight ?? 240;
    const isPhone = vw < 640;
    if (!el) {
      setBox(null);
      setCard({
        top: Math.max(16, (vh - ch) / 2),
        left: Math.max(16, (vw - CARD_W) / 2),
        dock: isPhone ? 'bottom' : null,
      });
      return;
    }
    const r = el.getBoundingClientRect();
    const b = {
      top: r.top - PAD,
      left: r.left - PAD,
      width: r.width + PAD * 2,
      height: r.height + PAD * 2,
    };
    setBox(b);
    /* Phones: the card docks to the edge away from the highlighted control */
    if (isPhone)
      return setCard({ top: 0, left: 0, dock: r.top + r.height / 2 > vh / 2 ? 'top' : 'bottom' });
    /* Below the target when it fits, otherwise above, otherwise beside it on the left */
    let top = b.top + b.height + GAP;
    if (top + ch > vh - 16) top = b.top - GAP - ch;
    let left = b.left + b.width / 2 - CARD_W / 2;
    if (top < 16) {
      top = Math.min(Math.max(16, b.top), vh - ch - 16);
      left = b.left - GAP - CARD_W;
      if (left < 16) left = b.left + b.width + GAP;
    }
    left = Math.min(Math.max(16, left), vw - CARD_W - 16);
    setCard({ top, left, dock: null });
  }, [s.target]);

  /* Bring the target into view, then place the ring and card */
  useLayoutEffect(() => {
    if (!isOpen) return;
    const el = findTarget(s.target);
    const r = el?.getBoundingClientRect();
    if (el && r && (r.top < 80 || r.bottom > window.innerHeight - 120))
      el.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior });
    /* Measured on the next frame, once the scroll above has settled */
    const id = window.requestAnimationFrame(measure);
    return () => window.cancelAnimationFrame(id);
  }, [isOpen, step, s.target, measure]);

  useEffect(() => {
    if (!isOpen) return;
    const onMove = () => measure();
    window.addEventListener('resize', onMove);
    window.addEventListener('scroll', onMove, true);
    return () => {
      window.removeEventListener('resize', onMove);
      window.removeEventListener('scroll', onMove, true);
    };
  }, [isOpen, measure]);

  useEffect(() => {
    if (isOpen) nextRef.current?.focus({ preventScroll: true });
  }, [isOpen, step]);

  const finish = useCallback(() => {
    setStep(0);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      /* The questionnaire's own shortcuts (1 to 9, Enter, Esc) stay quiet while the tour runs */
      e.stopPropagation();
      if (e.key === 'Escape') finish();
      if (e.key === 'ArrowRight' && !isLast) setStep((n) => n + 1);
      if (e.key === 'ArrowLeft' && step > 0) setStep((n) => n - 1);
      /* Keep Tab inside the card */
      if (e.key === 'Tab' && cardRef.current) {
        const f = cardRef.current.querySelectorAll<HTMLElement>('button');
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    /* Capture so the questionnaire's own number and Enter shortcuts stay quiet during the tour */
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [isOpen, isLast, step, finish]);

  if (!isOpen) return null;

  return (
    <div className="tour" role="presentation">
      {/* Blocks clicks on the page while the tour runs */}
      <div className="tour-veil" aria-hidden="true" />
      {box ? (
        <div
          className="tour-ring"
          aria-hidden="true"
          style={{ top: box.top, left: box.left, width: box.width, height: box.height }}
        />
      ) : (
        <div className="tour-dim" aria-hidden="true" />
      )}
      <div
        ref={cardRef}
        className={card.dock ? `tour-card docked ${card.dock}` : 'tour-card'}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-t"
        aria-describedby="tour-b"
        style={card.dock ? undefined : { top: card.top, left: card.left }}
      >
        <div className="tour-head">
          <p className="tour-n">{T.step(step + 1, total)}</p>
          <button type="button" className="tour-x" onClick={finish} aria-label={T.close}>
            <LucideIcon name="x" />
          </button>
        </div>
        <h2 id="tour-t">{s.title}</h2>
        <p id="tour-b">{s.body}</p>
        {s.tip && <p className="tour-tip">{s.tip}</p>}
        <ol className="tour-dots" aria-hidden="true">
          {order.map((x, i) => (
            <li key={x} className={i === step ? 'on' : i < step ? 'done' : undefined} />
          ))}
        </ol>
        <div className="tour-foot">
          {!isLast && (
            <button type="button" className="tour-skip" onClick={finish}>
              {T.skip}
            </button>
          )}
          <span className="tour-sp" />
          {step > 0 && (
            <button type="button" className="tour-back" onClick={() => setStep(step - 1)}>
              {T.back}
            </button>
          )}
          <button
            ref={nextRef}
            type="button"
            className="tour-next"
            onClick={() => (isLast ? finish() : setStep(step + 1))}
          >
            {isLast ? T.done : T.next}
          </button>
        </div>
      </div>
    </div>
  );
}
