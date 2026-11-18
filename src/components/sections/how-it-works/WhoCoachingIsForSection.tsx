import { Icon } from '@/components/ui/Icon';

export function WhoCoachingIsForSection() {
  return (
    <section className="sec pt0" aria-labelledby="how-it-works-whocoachingisfor-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head c">
          <h2 id="how-it-works-whocoachingisfor-title">Who coaching is for, and who it isn’t</h2>
        </div>{' '}
        <div className="suit">
          {' '}
          <div className="suit-row">
            {' '}
            <span></span> <span className="suit-h y">Coaching suits you if</span>{' '}
            <span className="suit-h">Coaching doesn’t suit you if</span>{' '}
          </div>{' '}
          <div className="suit-row">
            {' '}
            <span className="k">What you want</span>{' '}
            <span className="y">
              <span className="tk">
                <Icon name="check" />
              </span>
              You want to understand why you feel the way you do, across body and mind.
            </span>{' '}
            <span className="n">
              <span className="tk">
                <Icon name="x" />
              </span>
              You want a diagnosis or a prescription.
            </span>{' '}
          </div>{' '}
          <div className="suit-row">
            {' '}
            <span className="k">How you want support</span>{' '}
            <span className="y">
              <span className="tk">
                <Icon name="check" />
              </span>
              You want weekly sessions over months.
            </span>{' '}
            <span className="n">
              <span className="tk">
                <Icon name="x" />
              </span>
              You want a quick fix or a single review at one point in time.
            </span>{' '}
          </div>{' '}
          <div className="suit-row">
            {' '}
            <span className="k">Who decides</span>{' '}
            <span className="y">
              <span className="tk">
                <Icon name="check" />
              </span>
              You want to make the decisions, using guidance based on your own data.
            </span>{' '}
            <span className="n">
              <span className="tk">
                <Icon name="x" />
              </span>
              You’d rather be handed a fixed set of instructions.
            </span>{' '}
          </div>{' '}
          <div className="suit-row">
            {' '}
            <span className="k">Your situation</span>{' '}
            <span className="y">
              <span className="tk">
                <Icon name="check" />
              </span>
              You’re feeling unwell and want your sleep, stress, food and lab results looked at
              together.
            </span>{' '}
            <span className="n">
              <span className="tk">
                <Icon name="x" />
              </span>
              You need urgent medical attention.
            </span>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
