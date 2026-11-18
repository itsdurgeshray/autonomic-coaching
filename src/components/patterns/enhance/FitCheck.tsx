'use client';

import { useEffect, useRef } from 'react';

export type FitCheckProps = { children: React.ReactNode };

/** Home "Is this for you?": tick the statements that fit you */
export function FitCheck({ children }: FitCheckProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    const card = root?.querySelector('.fit-card');
    if (!root || !card) return;
    const checks = [...root.querySelectorAll<HTMLButtonElement>('.check')];
    const offs = checks.map((c) => {
      const onClick = () => {
        c.setAttribute(
          'aria-pressed',
          c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true',
        );
        card.classList.toggle(
          'all',
          checks.some((x) => x.getAttribute('aria-pressed') === 'true'),
        );
      };
      c.addEventListener('click', onClick);
      return () => c.removeEventListener('click', onClick);
    });
    return () => offs.forEach((o) => o());
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
