import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function RequestCoachingSection() {
  return (
    <section className="final dark" aria-labelledby="blog-requestcoaching-title">
      {' '}
      <div className="wrap">
        {' '}
        <h2 id="blog-requestcoaching-title">Request one-to-one coaching</h2>{' '}
        <p className="lede">
          Coaching is private and by application. Each application is reviewed before a call is
          booked.
        </p>{' '}
        <SiteButton href="#request" variant="pill">
          Request Coaching <Icon name="arrow" />
        </SiteButton>{' '}
      </div>{' '}
    </section>
  );
}
