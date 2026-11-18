'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/components/patterns/enhance/useReducedMotion';

const CALM = 'M0 40 C 30 40, 44 26, 66 26 S 104 54, 130 54 S 170 40, 200 40';
const ALERT =
  'M0 40 L14 40 L24 6 L36 74 L48 12 L60 68 L72 16 L84 64 L96 20 L108 60 L120 26 L132 54 L144 40 L200 40';

export type GapComparatorProps = { children: React.ReactNode };

/** Responsive Living: compares the space between stress and response under constant stress and with Responsive Living */
export function GapComparator({ children }: GapComparatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gv = ref.current?.querySelector<HTMLElement>('#gapviz');
    if (!gv) return;
    const btns = [...gv.querySelectorAll<HTMLButtonElement>('[data-set]')];
    const resp = gv.querySelector('.gv-col.r .wave');
    const area = gv.querySelector('.gv-col.r .area');
    let isAuto = true;
    const set = (s: string) => {
      gv.setAttribute('data-state', s);
      btns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.set === s)));
      resp?.setAttribute('d', s === 'stress' ? ALERT : CALM);
      area?.setAttribute('d', `${s === 'stress' ? ALERT : CALM} L200 80 L0 80 Z`);
    };
    const offs = btns.map((b) => {
      const onClick = () => {
        isAuto = false;
        set(b.dataset.set ?? 'rl');
      };
      b.addEventListener('click', onClick);
      return () => b.removeEventListener('click', onClick);
    });
    set('stress');
    let timer = 0;
    const io = new IntersectionObserver(
      (en) => {
        if (!en[0].isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => isAuto && set('rl'), prefersReducedMotion() ? 0 : 1400);
      },
      { threshold: 0.5 },
    );
    io.observe(gv);
    return () => {
      offs.forEach((o) => o());
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
