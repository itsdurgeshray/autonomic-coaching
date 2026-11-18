'use client';

import { useEffect } from 'react';

/** FAQ page: search filters the answers; the topic menu follows the group being read. Renders nothing itself. */
export function FaqSearch() {
  useEffect(() => {
    const q = document.querySelector<HTMLInputElement>('#q');
    const groups = [...document.querySelectorAll<HTMLElement>('.group')];
    const navs = [...document.querySelectorAll<HTMLAnchorElement>('.tnav a')];
    const onInput = () => {
      const term = (q?.value ?? '').trim().toLowerCase();
      groups.forEach((g) => {
        let n = 0;
        g.querySelectorAll('details').forEach((d) => {
          const ok = !term || (d.textContent ?? '').toLowerCase().includes(term);
          d.hidden = !ok;
          if (ok) n++;
          d.open = Boolean(term && ok);
        });
        g.hidden = n === 0;
      });
    };
    const spy = () => {
      let cur: string | null = null;
      groups.forEach((g) => {
        if (!g.hidden && g.getBoundingClientRect().top < 200) cur = g.dataset.g ?? null;
      });
      navs.forEach((a) => a.classList.toggle('on', a.dataset.t === (cur ?? 'fit')));
    };
    q?.addEventListener('input', onInput);
    spy();
    window.addEventListener('scroll', spy, { passive: true });
    return () => {
      q?.removeEventListener('input', onInput);
      window.removeEventListener('scroll', spy);
    };
  }, []);

  return null;
}
