import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function FinalCTASection() {
  return (
    <section className="final dark" aria-labelledby="responsive-living-finalcta-title">
      {' '}
      <div className="wrap">
        {' '}
        <h2 id="responsive-living-finalcta-title">
          The book explains the system. Coaching applies it to your biology.
        </h2>{' '}
        <p className="lede">
          Autonomic Coaching is scientist-led, one-to-one health coaching that reads your lab
          results, your daily tracking and your psychology together, week by week, and adjusts the
          plan as your life changes. You learn to understand your own biology, so you lead the
          decisions.
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
