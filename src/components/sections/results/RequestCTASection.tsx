import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function RequestCTASection() {
  return (
    <section className="final dark" aria-labelledby="results-requestcta-title">
      {' '}
      <div className="wrap">
        {' '}
        <h2 id="results-requestcta-title">Request one-to-one coaching</h2>{' '}
        <p className="lede">
          Coaching is private and by application. Each application is reviewed before a call is
          booked.
        </p>{' '}
        <div className="ctas">
          {' '}
          <SiteButton href="/how-it-works" variant="ghost">
            See how coaching works <Icon name="arrow" />
          </SiteButton>{' '}
          <SiteButton href="#request" variant="pill">
            Request Coaching <Icon name="arrow" />
          </SiteButton>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
