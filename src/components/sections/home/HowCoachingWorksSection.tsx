import { Icon } from '@/components/ui/Icon';
import { CoachingSteps } from '@/components/patterns/enhance/CoachingSteps';
import { SiteButton } from '@/components/ui/SiteButton';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function HowCoachingWorksSection() {
  return (
    <section className="sec" id="how" aria-labelledby="home-howcoachingworks-title">
      {' '}
      <CoachingSteps>
        <div className="wrap">
          {' '}
          <div className="how-head">
            {' '}
            <SiteEyebrow>How coaching works</SiteEyebrow>{' '}
            <h2 id="home-howcoachingworks-title">
              From first assessment to lasting results: how we rebuild your health in 4 steps.
            </h2>{' '}
          </div>{' '}
          <div className="how">
            {' '}
            <div className="how-left">
              {' '}
              <div className="steps paused" id="steps">
                {' '}
                <button className="step active" data-i="0" type="button">
                  {' '}
                  <span className="step-dot">
                    <svg className="ring" viewBox="0 0 58 58" aria-hidden="true">
                      <circle className="trk" cx="29" cy="29" r="27" />
                      <circle className="prg" cx="29" cy="29" r="27" />
                    </svg>
                    01
                  </span>{' '}
                  <span>
                    <span className="step-title">Request coaching.</span>
                    <span className="step-more">
                      <span>
                        <span className="step-desc">
                          Share your health history, symptoms and goals.
                        </span>
                      </span>
                    </span>
                  </span>{' '}
                </button>{' '}
                <button className="step" data-i="1" type="button">
                  {' '}
                  <span className="step-dot">
                    <svg className="ring" viewBox="0 0 58 58" aria-hidden="true">
                      <circle className="trk" cx="29" cy="29" r="27" />
                      <circle className="prg" cx="29" cy="29" r="27" />
                    </svg>
                    02
                  </span>{' '}
                  <span>
                    <span className="step-title">Deep assessment.</span>
                    <span className="step-more">
                      <span>
                        <span className="step-desc">
                          We review your labs, symptoms and nervous system patterns to find root
                          causes.
                        </span>
                      </span>
                    </span>
                  </span>{' '}
                </button>{' '}
                <button className="step" data-i="2" type="button">
                  {' '}
                  <span className="step-dot">
                    <svg className="ring" viewBox="0 0 58 58" aria-hidden="true">
                      <circle className="trk" cx="29" cy="29" r="27" />
                      <circle className="prg" cx="29" cy="29" r="27" />
                    </svg>
                    03
                  </span>{' '}
                  <span>
                    <span className="step-title">Your personalised protocol.</span>
                    <span className="step-more">
                      <span>
                        <span className="step-desc">
                          You get clear daily actions across nutrition, supplementation, nervous
                          system work and lifestyle.
                        </span>
                      </span>
                    </span>
                  </span>{' '}
                </button>{' '}
                <button className="step" data-i="3" type="button">
                  {' '}
                  <span className="step-dot">
                    <svg className="ring" viewBox="0 0 58 58" aria-hidden="true">
                      <circle className="trk" cx="29" cy="29" r="27" />
                      <circle className="prg" cx="29" cy="29" r="27" />
                    </svg>
                    04
                  </span>{' '}
                  <span>
                    <span className="step-title">Weekly coaching.</span>
                    <span className="step-more">
                      <span>
                        <span className="step-desc">
                          We track your progress, adjust your plan and keep you moving forward.
                        </span>
                      </span>
                    </span>
                  </span>{' '}
                </button>{' '}
              </div>{' '}
              <div>
                <SiteButton href="#request" variant="primary">
                  Request Coaching <Icon name="arrow" />
                </SiteButton>
              </div>{' '}
            </div>{' '}
            <div className="stage" id="stage" aria-hidden="true">
              {' '}
              <div className="scene on">
                {' '}
                <div className="ui">
                  {' '}
                  <div className="ui-head">
                    <span className="ic sm soft">
                      <Icon name="i-note-pencil" className="pi" />
                    </span>
                    <span className="t">Request coaching</span>
                  </div>{' '}
                  <div className="field">
                    <span className="flabel">Health history</span>
                    <div className="box tall">
                      <span
                        className="sk"
                        style={{ '--w': '82%', '--dl': '.25s' } as React.CSSProperties}
                      ></span>
                      <span
                        className="sk"
                        style={{ '--w': '54%', '--dl': '.7s' } as React.CSSProperties}
                      ></span>
                    </div>
                  </div>{' '}
                  <div className="field">
                    <span className="flabel">Symptoms</span>
                    <div className="box">
                      <span
                        className="sk"
                        style={{ '--w': '64%', '--dl': '1.1s' } as React.CSSProperties}
                      ></span>
                    </div>
                  </div>{' '}
                  <div className="field">
                    <span className="flabel">Goals</span>
                    <div className="box">
                      <span
                        className="sk"
                        style={{ '--w': '48%', '--dl': '1.5s' } as React.CSSProperties}
                      ></span>
                    </div>
                  </div>{' '}
                  <span className="btn btn-primary">
                    Request Coaching <Icon name="arrow" />
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              <div className="scene">
                {' '}
                <div className="flow">
                  {' '}
                  <svg viewBox="0 0 520 360" preserveAspectRatio="none">
                    {' '}
                    <path d="M240 70 C 300 70, 300 180, 344 180" /> <path d="M240 180 L 344 180" />{' '}
                    <path d="M240 290 C 300 290, 300 180, 344 180" />{' '}
                  </svg>{' '}
                  <div className="src" style={{ top: '19.5%' }}>
                    <span className="ic">
                      <Icon name="i-test-tube" className="pi" />
                    </span>
                    Labs
                  </div>{' '}
                  <div className="src" style={{ top: '50%' }}>
                    <span className="ic">
                      <Icon name="i-thermometer-simple" className="pi" />
                    </span>
                    Symptoms
                  </div>{' '}
                  <div className="src" style={{ top: '80.5%' }}>
                    <span className="ic">
                      <Icon name="i-heartbeat" className="pi" />
                    </span>
                    Nervous system patterns
                  </div>{' '}
                  <div className="sink">
                    <span className="ring">
                      <Icon name="i-crosshair-simple" className="pi" />
                    </span>
                    <span className="t">Root causes</span>
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className="scene">
                {' '}
                <div className="ui">
                  {' '}
                  <div className="ui-head">
                    <span className="ic sm soft">
                      <Icon name="i-list-checks" className="pi" />
                    </span>
                    <span className="t">Your personalised protocol</span>
                  </div>{' '}
                  <div className="plan-row">
                    <span className="ic sm soft">
                      <Icon name="i-bowl-food" className="pi" />
                    </span>
                    <span>
                      <span className="n">Nutrition</span>
                      <span className="sk" style={{ '--w': '70%' } as React.CSSProperties}></span>
                    </span>
                    <span className="tick" style={{ '--dl': '.4s' } as React.CSSProperties}>
                      <Icon name="check" />
                    </span>
                  </div>{' '}
                  <div className="plan-row">
                    <span className="ic sm soft">
                      <Icon name="i-pill" className="pi" />
                    </span>
                    <span>
                      <span className="n">Supplementation</span>
                      <span className="sk" style={{ '--w': '52%' } as React.CSSProperties}></span>
                    </span>
                    <span className="tick" style={{ '--dl': '.8s' } as React.CSSProperties}>
                      <Icon name="check" />
                    </span>
                  </div>{' '}
                  <div className="plan-row">
                    <span className="ic sm soft">
                      <Icon name="i-wind" className="pi" />
                    </span>
                    <span>
                      <span className="n">Nervous system work</span>
                      <span className="sk" style={{ '--w': '62%' } as React.CSSProperties}></span>
                    </span>
                    <span className="tick" style={{ '--dl': '1.2s' } as React.CSSProperties}>
                      <Icon name="check" />
                    </span>
                  </div>{' '}
                  <div className="plan-row">
                    <span className="ic sm soft">
                      <Icon name="i-sun-horizon" className="pi" />
                    </span>
                    <span>
                      <span className="n">Lifestyle</span>
                      <span className="sk" style={{ '--w': '44%' } as React.CSSProperties}></span>
                    </span>
                    <span className="tick" style={{ '--dl': '1.6s' } as React.CSSProperties}>
                      <Icon name="check" />
                    </span>
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className="scene">
                {' '}
                <div className="ui">
                  {' '}
                  <div className="ui-head">
                    <span className="ic sm soft">
                      <Icon name="i-chart-line-up" className="pi" />
                    </span>
                    <span className="t">Weekly coaching</span>
                  </div>{' '}
                  <div className="chart">
                    {' '}
                    <svg viewBox="0 0 400 150" preserveAspectRatio="none">
                      {' '}
                      <defs>
                        <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#1d55d6" stopOpacity=".18" />
                          <stop offset="1" stopColor="#1d55d6" stopOpacity="0" />
                        </linearGradient>
                      </defs>{' '}
                      <line className="gl" x1="0" y1="30" x2="400" y2="30" />
                      <line className="gl" x1="0" y1="75" x2="400" y2="75" />
                      <line className="gl" x1="0" y1="120" x2="400" y2="120" />{' '}
                      <path
                        className="ar"
                        d="M0 128 C 40 124, 60 112, 90 114 S 140 96, 170 92 S 220 74, 250 70 S 300 48, 330 44 S 380 26, 400 22 L 400 150 L 0 150 Z"
                      />{' '}
                      <path
                        className="ln"
                        d="M0 128 C 40 124, 60 112, 90 114 S 140 96, 170 92 S 220 74, 250 70 S 300 48, 330 44 S 380 26, 400 22"
                      />{' '}
                    </svg>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>
      </CoachingSteps>{' '}
    </section>
  );
}
