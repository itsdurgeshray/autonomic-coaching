'use client';

import { useEffect, useRef } from 'react';

export type ArticleToolsProps = { children: React.ReactNode };

/** Blog article: reading progress, table of contents highlight and copy link */
export function ArticleTools({ children }: ArticleToolsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const bar = document.getElementById('prog');
    const art = root.querySelector<HTMLElement>('.prose');
    const links = [...root.querySelectorAll<HTMLAnchorElement>('#toc a')];
    const heads = links.map((a) => document.getElementById(a.getAttribute('href')?.slice(1) ?? ''));
    const onScroll = () => {
      if (bar && art) {
        const r = art.getBoundingClientRect();
        const total = r.height - window.innerHeight * 0.6;
        bar.style.width = `${Math.max(0, Math.min(1, -r.top / total)) * 100}%`;
      }
      let cur = 0;
      heads.forEach((h, i) => {
        if (h && h.getBoundingClientRect().top < 160) cur = i;
      });
      links.forEach((a, i) => a.classList.toggle('on', i === cur));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const url = window.location.href.split('?')[0];
    const copy = root.querySelector('#copyLink');
    const onCopy = () => {
      const done = () => {
        const s = document.getElementById('copied');
        if (s) s.textContent = 'Link copied';
      };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done);
      else done();
    };
    copy?.addEventListener('click', onCopy);
    return () => {
      window.removeEventListener('scroll', onScroll);
      copy?.removeEventListener('click', onCopy);
    };
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
