'use client';

export type RichTextProps = {
  text: string;
  /** Term whose cue card is open */
  openTerm: string | null;
  onTerm: (key: string) => void;
};

/** Renders {label|key} markup as buttons that open the matching cue card */
export function RichText({ text, openTerm, onTerm }: RichTextProps) {
  const parts: React.ReactNode[] = [];
  const re = /\{([^|}]+)\|([^}]+)\}/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const key = m[2];
    parts.push(
      <button
        key={`${key}-${m.index}`}
        type="button"
        className="term"
        aria-expanded={openTerm === key}
        onClick={() => onTerm(key)}
      >
        {m[1]}
      </button>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export const termsIn = (t: string) => [...t.matchAll(/\{([^|}]+)\|([^}]+)\}/g)].map((m) => m[2]);
