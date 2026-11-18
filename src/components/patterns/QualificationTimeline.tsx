'use client';

import { useId, useRef, useState } from 'react';
import type { Qualification } from '@/content/about';

export type QualificationTimelineProps = { items: Qualification[] };

/**
 * Desktop and tablet: a horizontal rail of years; choosing one fills the line up to it and shows its details.
 * Phones: a top-down timeline with every entry shown in full.
 */
export function QualificationTimeline({ items }: QualificationTimelineProps) {
  const [active, setActive] = useState(items.length - 1);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const progress = items.length > 1 ? (active / (items.length - 1)) * 100 : 100;

  function onKey(e: React.KeyboardEvent, i: number) {
    const next =
      e.key === 'ArrowRight'
        ? i + 1
        : e.key === 'ArrowLeft'
          ? i - 1
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? items.length - 1
              : null;
    if (next === null) return;
    e.preventDefault();
    const n = (next + items.length) % items.length;
    setActive(n);
    tabs.current[n]?.focus();
  }

  const cur = items[active];
  return (
    <div className="qt">
      {/* Rail, tablet and up */}
      <div className="qt-rail" style={{ '--p': `${progress}%` } as React.CSSProperties}>
        <div role="tablist" aria-label="Qualifications by year" className="qt-tabs">
          {items.map((q, i) => (
            <button
              key={`${q.year}-${q.title}`}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${uid}-panel`}
              tabIndex={i === active ? 0 : -1}
              className={[
                'qt-node',
                i <= active ? 'is-past' : '',
                q.isCurrent ? 'is-current' : '',
              ].join(' ')}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="qt-dot" aria-hidden="true" />
              <span className="qt-year">{q.year}</span>
              <span className="qt-short">{q.title}</span>
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`${uid}-panel`}
          aria-labelledby={`${uid}-tab-${active}`}
          className="qt-card"
          aria-live="polite"
        >
          <p className="qt-card-year">{cur.year}</p>
          <h3>{cur.title}</h3>
          <p className="qt-card-by">{cur.by}</p>
          <p className="qt-count" aria-hidden="true">
            {active + 1} / {items.length}
          </p>
        </div>
      </div>

      {/* Top-down list, phones */}
      <ol className="qt-list">
        {items.map((q) => (
          <li key={`${q.year}-${q.title}`} className={q.isCurrent ? 'is-current' : ''}>
            <span className="qt-dot" aria-hidden="true" />
            <p className="qt-year">{q.year}</p>
            <h3>{q.title}</h3>
            <p className="qt-card-by">{q.by}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
