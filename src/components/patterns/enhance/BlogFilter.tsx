'use client';

import { useEffect } from 'react';

/** Blog listing: the hero search box and topic pills filter the latest articles. Renders nothing itself. */
export function BlogFilter() {
  useEffect(() => {
    const root = document;
    const chips = [...root.querySelectorAll<HTMLButtonElement>('.chip-f')];
    const cards = [...root.querySelectorAll<HTMLElement>('#grid .card-a')];
    const q = root.querySelector<HTMLInputElement>('#q');
    const count = root.querySelector('#count');
    const empty = root.querySelector('#empty');
    let topic = 'all';
    const apply = () => {
      const term = (q?.value ?? '').trim().toLowerCase();
      let n = 0;
      cards.forEach((c) => {
        const ok =
          (topic === 'all' || c.dataset.t === topic) &&
          (!term || (c.textContent ?? '').toLowerCase().includes(term));
        c.hidden = !ok;
        if (ok) n++;
      });
      if (count) count.textContent = `${n} ${n === 1 ? 'article' : 'articles'}`;
      empty?.classList.toggle('on', n === 0);
    };
    const offs = chips.map((c) => {
      const onClick = () => {
        topic = c.dataset.f ?? 'all';
        chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
        apply();
      };
      c.addEventListener('click', onClick);
      return () => c.removeEventListener('click', onClick);
    });
    const go = root.querySelector('#qgo');
    const onGo = () => {
      apply();
      root.querySelector('#latest')?.scrollIntoView({ behavior: 'smooth' });
    };
    q?.addEventListener('input', apply);
    go?.addEventListener('click', onGo);
    apply();
    return () => {
      offs.forEach((o) => o());
      q?.removeEventListener('input', apply);
      go?.removeEventListener('click', onGo);
    };
  }, []);

  return null;
}
