'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/components/patterns/enhance/useReducedMotion';

export type CoachingStepsProps = { children: React.ReactNode };

/** Home "How coaching works": steps advance with their ring timer once the stage scrolls into view */
export function CoachingSteps({ children }: CoachingStepsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const steps = [...root.querySelectorAll<HTMLElement>('.step')];
    const scenes = [...root.querySelectorAll<HTMLElement>('.scene')];
    const stepsEl = root.querySelector<HTMLElement>('#steps');
    const how = root.querySelector<HTMLElement>('.how');
    const stage = root.querySelector<HTMLElement>('#stage');
    if (!stepsEl || !how || !stage) return;
    const reduce = prefersReducedMotion();
    let current = 0;
    let started = false;
    const go = (n: number) => {
      current = (n + steps.length) % steps.length;
      steps.forEach((s, i) => {
        s.classList.toggle('active', i === current);
        s.classList.toggle('done', i < current);
        s.setAttribute('aria-current', i === current ? 'step' : 'false');
        const p = s.querySelector<SVGElement>('.ring .prg');
        if (p) {
          p.style.animation = 'none';
          void p.getBoundingClientRect();
          p.style.animation = '';
        }
      });
      scenes.forEach((sc, i) => {
        sc.classList.remove('on');
        if (i === current) {
          void sc.offsetWidth;
          sc.classList.add('on');
        }
      });
    };
    const offs = steps.map((s, i) => {
      const onClick = () => go(i);
      const onEnd = () => !reduce && go(current + 1);
      s.addEventListener('click', onClick);
      s.querySelector('.ring .prg')?.addEventListener('animationend', onEnd);
      return () => {
        s.removeEventListener('click', onClick);
        s.querySelector('.ring .prg')?.removeEventListener('animationend', onEnd);
      };
    });
    const pause = () => stepsEl.classList.add('paused');
    const resume = () => started && !reduce && stepsEl.classList.remove('paused');
    how.addEventListener('mouseenter', pause);
    how.addEventListener('mouseleave', resume);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        go(0);
        if (!reduce) stepsEl.classList.remove('paused');
        io.disconnect();
      },
      { threshold: 0.35 },
    );
    io.observe(stage);
    return () => {
      offs.forEach((o) => o());
      how.removeEventListener('mouseenter', pause);
      how.removeEventListener('mouseleave', resume);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
