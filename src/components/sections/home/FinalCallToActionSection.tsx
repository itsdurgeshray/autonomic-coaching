import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function FinalCallToActionSection() {
  return (
    <section className="final dark" id="start" aria-labelledby="home-finalcalltoaction-title">
      {' '}
      <div className="dots"></div>{' '}
      <div className="wrap">
        {' '}
        <h2 id="home-finalcalltoaction-title">
          Get a coach who reads your biology and stays with you until it’s fixed.
        </h2>{' '}
        <p className="lede">
          Spots are limited so every client gets real attention. Tell us where you’re at and we’ll
          take it from there.
        </p>{' '}
        <div>
          <SiteButton href="#request" variant="pill">
            Request Coaching <Icon name="arrow" />
          </SiteButton>
        </div>{' '}
      </div>{' '}
    </section>
  );
}
