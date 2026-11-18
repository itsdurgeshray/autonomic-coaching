import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      {' '}
      <div className="dots"></div> <div className="glow"></div>{' '}
      <div className="hero-in">
        {' '}
        <div className="hero-copy">
          {' '}
          <SiteEyebrow>One-to-one health coaching for high performers</SiteEyebrow>{' '}
          <h1 id="home-hero-title">
            Your health, decoded and rebuilt, with your 1-1 coach, Justin
          </h1>{' '}
          <p className="hero-sub">
            Personalised coaching with guided by your biology, not guesswork. Built for people
            who’ve tried everything else.
          </p>{' '}
          <div className="hero-ctas">
            {' '}
            <SiteButton href="#request" variant="primary">
              Request Coaching <Icon name="arrow" />
            </SiteButton>{' '}
            <SiteButton href="#results" variant="ghost">
              See client results <Icon name="arrow" />
            </SiteButton>{' '}
          </div>{' '}
        </div>{' '}
        <div className="hero-person">
          {' '}
          <Image
            src="/images/justin-maguire-arms-crossed.png"
            alt="Justin Maguire, smiling with arms crossed"
            width={1100}
            height={1439}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />{' '}
          <div className="glass">
            {' '}
            <div className="row">
              <span className="live"></span>Limited client spots
            </div>{' '}
            <div className="row">
              <Icon name="globe" />
              Online, worldwide
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className="fade"></div>{' '}
    </section>
  );
}
