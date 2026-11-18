import { Icon } from '@/components/ui/Icon';

export function TheFirstCallAndYourAssessmentSection() {
  return (
    <section className="sec pt0" aria-labelledby="how-it-works-thefirstcallandyourassessment-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="call">
          {' '}
          <div>
            {' '}
            <h2 id="how-it-works-thefirstcallandyourassessment-title">
              The first call and your Assessment
            </h2>{' '}
            <p className="body">
              On the first call, we talk through what you’re dealing with and what you’ve already
              tried, and we decide together whether to go ahead.
            </p>{' '}
            <p className="body">
              If we do, the assessment begins. We work through four questions with you: what your
              symptoms are, which patterns sit behind them, what is driving those patterns, and what
              plan follows.
            </p>{' '}
          </div>{' '}
          <div className="qs" aria-hidden="true">
            {' '}
            <div className="qs-top">We work through four questions with you</div>{' '}
            <ol>
              {' '}
              <li>What your symptoms are</li> <li>Which patterns sit behind them</li>{' '}
              <li>What is driving those patterns</li> <li>What plan follows</li>{' '}
            </ol>{' '}
          </div>{' '}
        </div>{' '}
        <div className="from">
          {' '}
          <p className="statement">
            We work from your{' '}
            <span className="nw">
              <span className="chip">
                <span className="ci">
                  <Icon name="i-drop-half" className="pi" />
                </span>
                blood work
              </span>
              ,
            </span>{' '}
            <span className="nw">
              <span className="chip">
                <span className="ci">
                  <Icon name="i-dna" className="pi" />
                </span>
                genetics
              </span>
              ,
            </span>{' '}
            <span className="chip">
              <span className="ci">
                <Icon name="i-flask" className="pi" />
              </span>
              hormones
            </span>{' '}
            and{' '}
            <span className="nw">
              <span className="chip">
                <span className="ci">
                  <Icon name="i-heartbeat" className="pi" />
                </span>
                symptom patterns
              </span>
              .
            </span>
          </p>{' '}
          <p className="body">
            We go through any lab results you already have, recommend further tests, and explain
            what each one shows. A lab result reads differently depending on how you’re sleeping,
            eating and coping with stress, so we look at those too, including your nervous system
            patterns and mental wellbeing.
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
