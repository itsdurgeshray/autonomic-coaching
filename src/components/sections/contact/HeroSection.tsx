import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function HeroSection() {
  return (
    <section className="phero c-hero" aria-labelledby="contact-hero-title">
      {' '}
      <div className="phero-in">
        {' '}
        <div className="phero-copy">
          {' '}
          <h1 id="contact-hero-title">Start a Conversation</h1>{' '}
          <p className="sub">
            Scientist-led, one-to-one health coaching begins with understanding your situation.
          </p>{' '}
          <div className="ctas">
            <SiteButton href="#request" variant="primary">
              Request Coaching <Icon name="arrow" />
            </SiteButton>
          </div>{' '}
        </div>{' '}
        <div className="c-art">
          <div className="media">
            <Image
              src="/images/justin-maguire-white-coat.png"
              alt="Justin Maguire"
              width={588}
              height={700}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>{' '}
      </div>{' '}
    </section>
  );
}
