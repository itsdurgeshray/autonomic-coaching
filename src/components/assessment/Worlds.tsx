'use client';

import { useEffect, useState } from 'react';

export type WorldsProps = { worldId: string; seed: number };

function motes(seed: number) {
  let s = seed * 9301 + 49297;
  const r = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: 10 }, (_, k) => {
    const left = k % 2 ? 72 + r() * 26 : 2 + r() * 26;
    return {
      left: `${left.toFixed(1)}%`,
      '--z': `${Math.round(4 + r() * 6)}px`,
      '--d': `${Math.round(18 + r() * 14)}s`,
      '--dl': `-${Math.round(r() * 30)}s`,
      '--dx': `${Math.round(-40 + r() * 80)}px`,
    } as React.CSSProperties;
  });
}

/** Soft section worlds behind the questions, crossfading as you move between sections */
export function Worlds({ worldId, seed }: WorldsProps) {
  const key = `${worldId}-${seed}`;
  const [layers, setLayers] = useState([{ key, id: worldId, seed, isOn: true }]);
  /* A new world joins the stack during render, then fades in */
  if (layers[layers.length - 1].key !== key)
    setLayers((ls) => [...ls.slice(-1), { key, id: worldId, seed, isOn: false }]);

  useEffect(() => {
    const a = requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        setLayers((ls) => ls.map((l) => (l.key === key ? { ...l, isOn: true } : l))),
      ),
    );
    const t = window.setTimeout(() => setLayers((ls) => ls.filter((l) => l.key === key)), 1600);
    return () => {
      cancelAnimationFrame(a);
      window.clearTimeout(t);
    };
  }, [key]);

  return (
    <div className="worlds" aria-hidden="true">
      {layers.map((l) => (
        <div key={l.key} className={l.isOn ? 'world on' : 'world'}>
          <div className="ph" style={{ backgroundImage: `url(/assessment/bg/${l.id}.jpg)` }} />
          <div className="veil" />
          <div className="motes">
            {motes(l.seed).map((st, k) => (
              <i key={k} style={st} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
