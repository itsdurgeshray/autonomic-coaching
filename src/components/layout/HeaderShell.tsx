'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/* Pages whose hero is dark: the transparent header switches to light text until it scrolls */
const DARK_HERO_PATHS = ['/', '/about'];

export type HeaderShellProps = { children: React.ReactNode };

export function HeaderShell({ children }: HeaderShellProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div data-hdr={DARK_HERO_PATHS.includes(pathname) ? 'dark' : undefined}>
      <header className={isScrolled ? 'hdr scrolled' : 'hdr'}>{children}</header>
    </div>
  );
}
