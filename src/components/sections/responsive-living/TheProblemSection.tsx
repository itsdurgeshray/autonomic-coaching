import { Icon } from '@/components/ui/Icon';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function TheProblemSection() {
  return (
    <section className="sec pt0" aria-labelledby="responsive-living-theproblem-title">
      {' '}
      <div className="wrap prob">
        {' '}
        <SiteEyebrow>The problem</SiteEyebrow>{' '}
        <h2 id="responsive-living-theproblem-title">
          Why do I still feel tired after a full night’s sleep?
        </h2>{' '}
        <ul className="sym">
          {' '}
          <li>
            <span className="ci">
              <Icon name="i-moon-stars" className="pi" />
            </span>
            You sleep eight hours and wake up already tired.
          </li>{' '}
          <li>
            <span className="ci">
              <Icon name="i-coffee" className="pi" />
            </span>
            Your focus is gone by mid-afternoon, and more coffee only makes you jittery.
          </li>{' '}
          <li>
            <span className="ci">
              <Icon name="i-power" className="pi" />
            </span>
            You can’t switch off, even when the day is over.
          </li>{' '}
          <li>
            <span className="ci">
              <Icon name="i-shuffle" className="pi" />
            </span>
            Every protocol you try contradicts the last one.
          </li>{' '}
          <li>
            <span className="ci">
              <Icon name="i-heartbeat" className="pi" />
            </span>
            You’ve stopped trusting your body to cope the way it used to.
          </li>{' '}
        </ul>{' '}
        <div className="familiar">
          {' '}
          <strong>Sound familiar?</strong>{' '}
          <p>
            If so, there’s a reason, and it starts with a gap most of us never learn to see.
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
