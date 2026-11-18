'use client';

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from '@/components/layout/NavLink';
import { Icon } from '@/components/ui/Icon';
import type { LinkItem } from '@/types/content';

export type MobileNavProps = { items: LinkItem[]; ctaLabel: string };

export function MobileNav({ items, ctaLabel }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  /* The sheet is portalled to <body> so the header's backdrop filter can't trap it; it only exists in the browser */
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.classList.add('locked');
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.classList.remove('locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="menu-btn"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(true)}
      >
        <Icon name="i-list" className="pi" />
        <span className="sr">Open menu</span>
      </button>
      {isClient &&
        createPortal(
          <div
            id={panelId}
            className={isOpen ? 'sheet open' : 'sheet'}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            hidden={!isOpen}
          >
            <button
              ref={closeRef}
              type="button"
              className="menu-btn close"
              style={{ display: 'grid' }}
              onClick={close}
            >
              <Icon name="i-x" className="pi" />
              <span className="sr">Close menu</span>
            </button>
            <nav aria-label="Mobile">
              {items.map((item) => (
                <NavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                  <Icon name="arrow" />
                </NavLink>
              ))}
            </nav>
            <a href="#request" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              {ctaLabel} <Icon name="arrow" />
            </a>
          </div>,
          document.body,
        )}
    </>
  );
}
