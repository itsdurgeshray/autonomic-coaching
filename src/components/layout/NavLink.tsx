'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link> & { href: string };

/** Marks the current page with aria-current, including nested routes such as blog posts */
export function NavLink({ href, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
  return <Link href={href} aria-current={isCurrent ? 'page' : undefined} {...rest} />;
}
