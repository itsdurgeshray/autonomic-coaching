import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function HowIWorkWithClientsSection() {
  return (
    <section className="sec pt0" aria-labelledby="about-howiworkwithclients-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head shead-row">
          {' '}
          <h2 id="about-howiworkwithclients-title">How I work with clients</h2>{' '}
          <SiteButton href="/how-it-works" variant="light" className="head-act">
            See how coaching works <Icon name="arrow" />
          </SiteButton>{' '}
        </div>{' '}
        <div className="qgrid">
          {' '}
          <div className="qcard">
            <span className="n">01</span>
            <h3>What are your symptoms?</h3>
            <p>
              You tell me what you’re experiencing in your own words, whether it’s a long-running
              concern or a recent drop in physical performance, mental clarity or energy.
            </p>
          </div>{' '}
          <div className="qcard">
            <span className="n">02</span>
            <h3>Which patterns sit behind them?</h3>
            <p>
              I look for where those symptoms connect across your nervous, immune, hormonal, and
              metabolic systems.
            </p>
          </div>{' '}
          <div className="qcard">
            <span className="n">03</span>
            <h3>What is driving those patterns?</h3>
            <p>I work out what is keeping them going.</p>
          </div>{' '}
          <div className="qcard">
            <span className="n">04</span>
            <h3>What plan follows?</h3>
            <p>I turn that into practical, personalized steps that fit a busy schedule.</p>
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
