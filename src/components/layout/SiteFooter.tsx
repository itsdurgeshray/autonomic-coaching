import Image from 'next/image';
import Link from 'next/link';
import { FooterPageNote } from '@/components/layout/FooterPageNote';
import { Icon, type IconProps } from '@/components/ui/Icon';
import type { LinkItem } from '@/types/content';

export type SiteFooterProps = {
  brand: string;
  ctaLabel: string;
  links: LinkItem[];
  socials: (LinkItem & { icon: IconProps['name'] })[];
  notes: string[];
  pageNotes: Record<string, string>;
};

/* Markup mirrors the original static footer exactly, so site.css renders it pixel for pixel */
export function SiteFooter({ brand, ctaLabel, links, socials, notes, pageNotes }: SiteFooterProps) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Link href="/" className="brand">
              <Image src="/images/autonomic-coaching-mark.png" alt="" width={104} height={97} />
              {brand}
            </Link>
            <div>
              <a href="#request" className="btn btn-primary">
                {ctaLabel} <Icon name="arrow" />
              </a>
            </div>
          </div>
          <nav className="foot-col foot-links" aria-label="Footer">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="foot-col socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href}>
                <Icon name={s.icon} className="pi" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="foot-mid">
          <div className="notes">
            <FooterPageNote notes={pageNotes} />
            {notes.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <a href="#main" className="totop" aria-label="Back to top">
            <Icon name="arrow" />
          </a>
        </div>
        <div className="mark-xl" aria-hidden="true">
          {brand}
        </div>
      </div>
    </footer>
  );
}
