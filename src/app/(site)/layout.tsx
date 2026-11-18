import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { RequestCoachingDialog } from '@/components/patterns/RequestCoachingDialog';
import {
  footerNav,
  footerNote,
  mobileNav,
  pageNotes,
  primaryNav,
  requestCta,
  socialNav,
} from '@/content/navigation';
import { site } from '@/lib/site';
import '@/styles/site.css';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip">
        Skip to main content
      </a>
      <SiteHeader
        items={primaryNav}
        mobileItems={mobileNav}
        ctaLabel={requestCta}
        brand={site.name}
      />
      <main id="main">{children}</main>
      <SiteFooter
        brand={site.name}
        ctaLabel={requestCta}
        links={footerNav}
        socials={socialNav}
        notes={[footerNote]}
        pageNotes={pageNotes}
      />
      <RequestCoachingDialog brand={site.name} />
    </>
  );
}
