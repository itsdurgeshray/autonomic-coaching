import { Icon } from '@/components/ui/Icon';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function TheProblemSection() {
  return (
    <section className="problem sec pt0" aria-labelledby="home-theproblem-title">
      {' '}
      <div className="wrap">
        {' '}
        <SiteEyebrow>The problem</SiteEyebrow>{' '}
        <h2 id="home-theproblem-title">
          Fatigue, brain fog, poor sleep and gut issues all have a root cause. We find it.
        </h2>{' '}
        <p className="quote">“Normal” labs don’t mean you’re well.</p>{' '}
        <p className="body">
          Energy that crashes mid-afternoon. Focus that slips when it matters most. Restless nights,
          digestive issues, weight that won’t shift.
        </p>{' '}
        <p className="deeper">
          We look deeper at{' '}
          <span className="nw">
            <span className="chip">
              <span className="ci">
                <Icon name="i-drop-half" className="pi" />
              </span>
              hormones
            </span>
            ,
          </span>{' '}
          <span className="nw">
            <span className="chip">
              <span className="ci">
                <Icon name="i-plant" className="pi" />
              </span>
              gut health
            </span>
            ,
          </span>{' '}
          <span className="chip">
            <span className="ci">
              <Icon name="i-fire" className="pi" />
            </span>
            metabolism
          </span>{' '}
          and{' '}
          <span className="chip">
            <span className="ci">
              <Icon name="i-wave-sine" className="pi" />
            </span>
            stress patterns
          </span>{' '}
          to find what’s actually holding you back, then build a plan to fix it.
        </p>{' '}
      </div>{' '}
    </section>
  );
}
