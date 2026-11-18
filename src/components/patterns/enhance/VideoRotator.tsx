'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/components/patterns/enhance/useReducedMotion';

export type VideoRotatorProps = { children: React.ReactNode };

/** One testimonial at a time; tabs advance on their progress bar and pause on hover */
export function VideoRotator({ children }: VideoRotatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vid = ref.current?.querySelector<HTMLElement>('.vid');
    if (!vid) return;
    const slides = [...vid.querySelectorAll<HTMLElement>('.slide')];
    const tabs = [...vid.querySelectorAll<HTMLButtonElement>('.vt')];
    const name = vid.querySelector('.vid-name');
    const play = vid.querySelector('.vid-play');
    const reduce = prefersReducedMotion();
    let cur = 0;
    const show = (n: number) => {
      cur = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('on', i === cur));
      tabs.forEach((t, i) => {
        t.classList.toggle('active', i === cur);
        t.setAttribute('aria-selected', String(i === cur));
        const bar = t.querySelector('i');
        if (bar) {
          bar.style.display = 'none';
          void bar.offsetWidth;
          bar.style.display = '';
        }
      });
      if (name) name.textContent = tabs[cur].textContent;
      play?.setAttribute('aria-label', `Play ${tabs[cur].textContent}’s video testimonial`);
    };
    const cleanups = tabs.map((t, i) => {
      const onClick = () => show(i);
      const onEnd = () => !reduce && show(cur + 1);
      t.addEventListener('click', onClick);
      t.querySelector('i')?.addEventListener('animationend', onEnd);
      return () => {
        t.removeEventListener('click', onClick);
        t.querySelector('i')?.removeEventListener('animationend', onEnd);
      };
    });
    const pause = () => vid.classList.add('paused');
    const resume = () => vid.classList.remove('paused');
    vid.addEventListener('mouseenter', pause);
    vid.addEventListener('mouseleave', resume);
    if (reduce) pause();
    return () => {
      cleanups.forEach((c) => c());
      vid.removeEventListener('mouseenter', pause);
      vid.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
