import Image from 'next/image';
import Link from 'next/link';
import { HeaderShell } from '@/components/layout/HeaderShell';
import { MobileNav } from '@/components/layout/MobileNav';
import { NavLink } from '@/components/layout/NavLink';
import { Icon } from '@/components/ui/Icon';
import type { LinkItem } from '@/types/content';

export type SiteHeaderProps = {
  items: LinkItem[];
  mobileItems: LinkItem[];
  ctaLabel: string;
  brand: string;
};

/* Markup mirrors the original static header exactly */
export function SiteHeader({ items, mobileItems, ctaLabel, brand }: SiteHeaderProps) {
  return (
    <HeaderShell>
      <div className="in">
        <Link href="/" className="brand" aria-label={`${brand} home`}>
          <Image
            src="/images/autonomic-coaching-mark.png"
            alt=""
            width={104}
            height={97}
            priority
          />
          {brand}
        </Link>
        <nav aria-label="Primary">
          {items.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a href="#request" className="btn btn-primary btn-sm">
          {ctaLabel} <Icon name="arrow" />
        </a>
        <MobileNav items={mobileItems} ctaLabel={ctaLabel} />
      </div>
    </HeaderShell>
  );
}
