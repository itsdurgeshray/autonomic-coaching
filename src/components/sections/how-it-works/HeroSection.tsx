import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function HeroSection() {
  return (
    <section className="phero how-hero" aria-labelledby="how-it-works-hero-title">
      {' '}
      <div className="phero-in">
        {' '}
        <div className="phero-copy">
          {' '}
          <h1 id="how-it-works-hero-title">
            How private health coaching works with Justin Maguire
          </h1>{' '}
          <p className="sub">
            Coaching starts with an application. After review, we book a call and begin weekly
            one-to-one sessions with Justin. We read your biology, your psychology and your daily
            life together, because each one affects the other two.
          </p>{' '}
          <div className="ctas">
            {' '}
            <SiteButton href="#request" variant="primary">
              Request Coaching <Icon name="arrow" />
            </SiteButton>{' '}
          </div>{' '}
        </div>{' '}
        <div className="scene" aria-hidden="true">
          {' '}
          <div className="ui ui-week">
            {' '}
            <div className="ui-h">
              Weekly coaching<small>Online, worldwide</small>
            </div>{' '}
            <div className="sess">
              <Image
                src="/images/justin-maguire-arms-crossed.png"
                alt=""
                width={1100}
                height={1439}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div>
                <strong>Justin Maguire</strong>
              </div>
              <span className="cam">
                <Icon name="i-video-camera" className="pi" />
              </span>
            </div>{' '}
            <div className="wk">
              <span>M</span>
              <span className="on">T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>
            </div>{' '}
          </div>{' '}
          <div className="ui ui-log">
            {' '}
            <div className="ui-h">Daily log</div>{' '}
            <div className="logrow">
              Sleep<b style={{ '--v': '72%' } as React.CSSProperties}></b>
            </div>{' '}
            <div className="logrow">
              Food<b style={{ '--v': '58%' } as React.CSSProperties}></b>
            </div>{' '}
            <div className="logrow">
              How you feel<b style={{ '--v': '66%' } as React.CSSProperties}></b>
            </div>{' '}
          </div>{' '}
          <div className="ui ui-tag">
            <Icon name="i-arrows-clockwise" className="pi" />
            Your personalized plan
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
