import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function CTASection() {
  return (
    <section className="final dark" aria-labelledby="faq-cta-title">
      {' '}
      <div className="wrap">
        {' '}
        <h2 id="faq-cta-title">Take the First Step Towards Understanding Your Health.</h2>{' '}
        <p className="lede">
          If Autonomic Coaching sounds like the right fit, we&apos;d welcome the opportunity to
          learn more about your situation.
        </p>{' '}
        <SiteButton href="#request" variant="pill">
          Request Coaching <Icon name="arrow" />
        </SiteButton>{' '}
      </div>{' '}
    </section>
  );
}
