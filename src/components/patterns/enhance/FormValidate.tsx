'use client';

import { useEffect, useRef } from 'react';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type FormValidateProps = { children: React.ReactNode };

/** Validates fields marked data-req, shows data-msg in .err, then reveals the .fdone message */
export function FormValidate({ children }: FormValidateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const forms = [...(ref.current?.querySelectorAll<HTMLFormElement>('form') ?? [])];
    const offs = forms.map((form) => {
      const err = form.querySelector('.err');
      const onSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        for (const f of form.querySelectorAll<HTMLInputElement>('[data-req]')) {
          const v = f.value.trim();
          const ok =
            f.type === 'checkbox' ? f.checked : f.type === 'email' ? EMAIL.test(v) : v.length > 0;
          f.setAttribute('aria-invalid', String(!ok));
          if (!ok) {
            if (err) err.textContent = f.dataset.msg ?? '';
            f.focus();
            return;
          }
        }
        if (err) err.textContent = '';
        form.parentElement?.classList.add('sent');
      };
      form.addEventListener('submit', onSubmit);
      return () => form.removeEventListener('submit', onSubmit);
    });
    return () => offs.forEach((o) => o());
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
