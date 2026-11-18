'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { requestCoaching as copy } from '@/content/requestCoaching';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type RequestCoachingDialogProps = { brand: string };

/** Opens from any link to #request anywhere on the page, like the original site */
export function RequestCoachingDialog({ brand }: RequestCoachingDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<{ field: string; message: string } | null>(null);
  const [isSent, setIsSent] = useState(false);
  const titleId = useId();
  const formId = useId();
  const lastFocus = useRef<HTMLElement | null>(null);
  const firstField = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href="#request"], a[href="/#request"]');
      if (!link) return;
      e.preventDefault();
      lastFocus.current = link as HTMLElement;
      setIsOpen(true);
    };
    document.addEventListener('click', onClick);
    const t = window.location.hash === '#request' ? window.setTimeout(() => setIsOpen(true), 0) : 0;
    return () => {
      document.removeEventListener('click', onClick);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.classList.add('locked');
    const t = window.setTimeout(() => firstField.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.documentElement.classList.remove('locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    for (const f of copy.fields) {
      const v = String(data.get(f.name) ?? '').trim();
      const ok = f.type === 'email' ? EMAIL.test(v) : v.length > 0;
      if (!ok) {
        setError({ field: f.name, message: f.error });
        (e.currentTarget.elements.namedItem(f.name) as HTMLElement | null)?.focus();
        return;
      }
    }
    setError(null);
    setIsSent(true);
  }

  return (
    <div className={isOpen ? 'modal open' : 'modal'} aria-hidden={!isOpen} inert={!isOpen}>
      <div className="modal-bg" onClick={close} aria-hidden="true" />
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button type="button" className="modal-x" onClick={close}>
          <Icon name="i-x" className="pi" />
          <span className="sr">Close</span>
        </button>
        <aside className="modal-side">
          <div className="glow" />
          <span className="brand">
            <Image src="/images/autonomic-coaching-mark.png" alt="" width={36} height={34} />
            {brand}
          </span>
          <h2 id={titleId} className="modal-title">
            {copy.title}
          </h2>
          <p>{copy.intro}</p>
          <ol className="msteps">
            {copy.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </aside>
        <div className={isSent ? 'modal-main sent' : 'modal-main'}>
          <form id={formId} className="rform" noValidate onSubmit={onSubmit}>
            <p className="eyebrow full">{copy.eyebrow}</p>
            {copy.fields.map((f, i) => {
              const id = `${formId}-${f.name}`;
              const hasError = error?.field === f.name;
              return (
                <div key={f.name} className={f.isWide ? 'rf full' : 'rf'}>
                  <label htmlFor={id}>
                    {f.label}
                    <span className="sr"> (required)</span>
                  </label>
                  {f.type === 'textarea' ? (
                    <textarea
                      id={id}
                      name={f.name}
                      className="short"
                      required
                      aria-invalid={hasError || undefined}
                      aria-describedby={hasError ? `${formId}-err` : undefined}
                    />
                  ) : (
                    <input
                      ref={i === 0 ? firstField : undefined}
                      id={id}
                      name={f.name}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      inputMode={f.type === 'email' ? 'email' : undefined}
                      placeholder={f.placeholder}
                      required
                      aria-invalid={hasError || undefined}
                      aria-describedby={hasError ? `${formId}-err` : undefined}
                    />
                  )}
                </div>
              );
            })}
            <div className="rform-foot full">
              <p id={`${formId}-err`} className="err" role="alert">
                {error?.message}
              </p>
              <button className="btn btn-primary" type="submit">
                {copy.submit} <Icon name="arrow" />
              </button>
            </div>
          </form>
          <div className="fdone" role="status">
            {isSent && (
              <>
                <span className="ok">
                  <Icon name="check" />
                </span>
                <strong>{copy.done.title}</strong>
                <p>{copy.done.body}</p>
                <button type="button" className="btn btn-light" onClick={close}>
                  {copy.done.close}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
