'use client';

import { useId } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/Icon';

export type PhoneInputProps = {
  id: string;
  /** Full number with its country code, for example "+27 82 555 0199" */
  value: string;
  onChange: (next: string) => void;
  codes: readonly { code: string; label: string }[];
  codeLabel: string;
  defaultCode: string;
  placeholder?: string;
  isReadOnly?: boolean;
  describedBy?: string;
  className?: string;
};

/** Splits a stored number into its country code and the rest, using the longest code that matches */
export function splitPhone(value: string, codes: readonly { code: string }[], fallback: string) {
  const v = value.trim();
  const match = [...codes]
    .sort((a, b) => b.code.length - a.code.length)
    .find((c) => v.startsWith(c.code));
  return match
    ? { code: match.code, rest: v.slice(match.code.length).trim() }
    : { code: fallback, rest: v.replace(/^\+\d+\s*/, '') };
}

/** Design system addon: a country code picker joined to a 40px number field */
export function PhoneInput({
  id,
  value,
  onChange,
  codes,
  codeLabel,
  defaultCode,
  placeholder,
  isReadOnly,
  describedBy,
  className,
}: PhoneInputProps) {
  const codeId = useId();
  const { code, rest } = splitPhone(value, codes, defaultCode);
  const join = (c: string, r: string) => (r.trim() ? `${c} ${r.trim()}` : '');
  return (
    <div className={cn('ds-addon', className)}>
      <span className={cn('ds-pre relative !px-0', isReadOnly && 'ds-is-readonly')}>
        <label htmlFor={codeId} className="sr-only">
          {codeLabel}
        </label>
        <select
          id={codeId}
          value={code}
          disabled={isReadOnly}
          onChange={(e) => onChange(join(e.target.value, rest))}
          className={cn(
            'ds-num text-ink h-full cursor-pointer appearance-none bg-transparent pr-7 pl-3 text-[14px] outline-none disabled:cursor-default',
            isReadOnly && 'pr-3',
          )}
        >
          {codes.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>
        {!isReadOnly && (
          <Icon
            name="i-caret-down"
            className="ds-ico ds-c-3 pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[12px]"
          />
        )}
      </span>
      <input
        id={id}
        type="tel"
        autoComplete="tel-national"
        inputMode="tel"
        className="ds-input"
        placeholder={placeholder}
        readOnly={isReadOnly}
        value={rest}
        onChange={(e) => onChange(join(code, e.target.value.replace(/[^\d\s-]/g, '')))}
        aria-describedby={describedBy}
      />
    </div>
  );
}
