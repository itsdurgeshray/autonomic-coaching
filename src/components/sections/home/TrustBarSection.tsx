import { Icon } from '@/components/ui/Icon';

export function TrustBarSection() {
  return (
    <section className="trust" aria-label="Trusted by">
      {' '}
      <div className="wrap">
        <p className="t">
          The method behind turnarounds for founders, executives and elite athletes.
        </p>
      </div>{' '}
      <div className="rail">
        {' '}
        <div className="rail-track" id="rail">
          {' '}
          <div className="logo">
            <Icon name="i-mountains" className="pi" />
            <span className="w1">
              Health Optimisation
              <br />
              Summit
            </span>
          </div>{' '}
          <div className="logo">
            <Icon name="i-microphone" className="pi" />
            <span className="w2">podcast</span>
          </div>{' '}
          <div className="logo">
            <span className="w4">Partner</span>
          </div>{' '}
          <div className="logo">
            <Icon name="if-waveform" className="pi" />
            <span className="w3">Podcast</span>
          </div>{' '}
          <div className="logo">
            <Icon name="i-circles-three" className="pi" />
            <span className="w2">partner</span>
          </div>{' '}
          <div className="logo">
            <Icon name="i-headphones" className="pi" />
            <span className="w1">Podcast</span>
          </div>{' '}
          <div className="logo" aria-hidden="true">
            <Icon name="i-mountains" className="pi" />
            <span className="w1">
              Health Optimisation
              <br />
              Summit
            </span>
          </div>{' '}
          <div className="logo" aria-hidden="true">
            <Icon name="i-microphone" className="pi" />
            <span className="w2">podcast</span>
          </div>{' '}
          <div className="logo" aria-hidden="true">
            <span className="w4">Partner</span>
          </div>{' '}
          <div className="logo" aria-hidden="true">
            <Icon name="if-waveform" className="pi" />
            <span className="w3">Podcast</span>
          </div>{' '}
          <div className="logo" aria-hidden="true">
            <Icon name="i-circles-three" className="pi" />
            <span className="w2">partner</span>
          </div>{' '}
          <div className="logo" aria-hidden="true">
            <Icon name="i-headphones" className="pi" />
            <span className="w1">Podcast</span>
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
