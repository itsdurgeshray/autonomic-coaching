import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function RequestCoachingWithMeSection() {
  return (
    <section className="final dark req" aria-labelledby="about-requestcoachingwithme-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="req-top">
          {' '}
          <div>
            {' '}
            <h2 id="about-requestcoachingwithme-title">Request coaching with me</h2>{' '}
            <p className="lede">
              Coaching is by application, so every client starts with a short form.
            </p>{' '}
            <SiteButton href="#request" variant="pill">
              Request Coaching <Icon name="arrow" />
            </SiteButton>{' '}
          </div>{' '}
          <ol className="rsteps">
            {' '}
            <li>
              You fill in a short form: your name, email, main health concern, what you’ve tried and
              your goals.
            </li>{' '}
            <li>Your request is reviewed before any call is booked.</li>{' '}
            <li>If coaching looks right for you, we invite you to a call.</li>{' '}
          </ol>{' '}
        </div>{' '}
        <div className="alts">
          {' '}
          <div className="alt bk">
            {' '}
            <p>Not ready to apply? My book explains the thinking behind the coaching.</p>{' '}
            <Link href="/responsive-living#chapter">
              Read the first chapter of Responsive Living free <Icon name="arrow" />
            </Link>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
