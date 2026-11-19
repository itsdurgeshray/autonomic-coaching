'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';

export type TagInputProps = {
  id: string;
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  removeLabel: string;
  emptyLabel?: string;
  isReadOnly?: boolean;
  describedBy?: string;
  scale?: 'md' | 'lg';
};

/** Free-text tags as design system chips: Enter or comma adds one, Backspace on an empty field removes the last */
export function TagInput({
  id,
  value,
  onChange,
  placeholder,
  removeLabel,
  emptyLabel,
  isReadOnly,
  describedBy,
  scale = 'lg',
}: TagInputProps) {
  const [draft, setDraft] = useState('');

  function add(raw: string) {
    const next = [...value];
    for (const t of raw
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean))
      if (!next.some((x) => x.toLowerCase() === t.toLowerCase())) next.push(t);
    onChange(next);
    setDraft('');
  }

  return (
    <div
      className={cn(
        'ds-input ds-tags',
        scale === 'lg' && 'ds-input-lg',
        isReadOnly && 'ds-is-readonly',
      )}
    >
      {value.length > 0 && (
        <ul role="list" className="contents">
          {value.map((t) => (
            <li key={t} className="ds-chip ds-soft">
              {t}
              {!isReadOnly && (
                <button
                  type="button"
                  className="ds-x"
                  onClick={() => onChange(value.filter((x) => x !== t))}
                >
                  <Icon name="i-x" className="ds-ico" />
                  <span className="sr-only">
                    {removeLabel} {t}
                  </span>
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {isReadOnly ? (
        value.length === 0 && <span className="ds-t-14 ds-c-3">{emptyLabel}</span>
      ) : (
        <input
          id={id}
          value={draft}
          placeholder={value.length ? undefined : placeholder}
          aria-describedby={describedBy}
          onChange={(e) =>
            e.target.value.includes(',') ? add(e.target.value) : setDraft(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' && draft.trim()) {
              e.preventDefault();
              add(draft);
            }
            if (e.key === 'Backspace' && !draft && value.length) onChange(value.slice(0, -1));
          }}
          onBlur={() => draft.trim() && add(draft)}
        />
      )}
    </div>
  );
}
