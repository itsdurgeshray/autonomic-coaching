'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';

export type AccountMenuProps = {
  initial: string;
  labels: { profile: string; signOut: string; openLabel: string };
  onProfile: () => void;
  onSignOut: () => void;
};

/** Design system avatar with a menu: your profile, sign out */
export function AccountMenu({ initial, labels, onProfile, onSignOut }: AccountMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
    const onDoc = (e: MouseEvent) => {
      if (
        !menuRef.current?.contains(e.target as Node) &&
        !btnRef.current?.contains(e.target as Node)
      )
        setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((v) => !v)}
        className="ds-avatar bg-g-900 text-white"
      >
        <span aria-hidden="true">{initial}</span>
        <span className="sr-only">{labels.openLabel}</span>
      </button>
      <div
        ref={menuRef}
        id={menuId}
        role="menu"
        hidden={!isOpen}
        className="ds-menu absolute top-12 right-0 z-30"
      >
        <button
          type="button"
          role="menuitem"
          onClick={() => {
            setIsOpen(false);
            onProfile();
          }}
        >
          <Icon name="i-user" className="ds-ico" />
          {labels.profile}
        </button>
        <hr />
        <button type="button" role="menuitem" className="ds-danger" onClick={onSignOut}>
          <Icon name="i-sign-out" className="ds-ico" />
          {labels.signOut}
        </button>
      </div>
    </div>
  );
}
