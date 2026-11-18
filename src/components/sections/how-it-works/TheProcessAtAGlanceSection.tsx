export function TheProcessAtAGlanceSection() {
  return (
    <section
      className="sec pt0"
      id="process"
      aria-labelledby="how-it-works-theprocessataglance-title"
    >
      {' '}
      <div className="wrap">
        {' '}
        <div className="head">
          <h2 id="how-it-works-theprocessataglance-title">The process at a glance</h2>
        </div>{' '}
        <ol className="proc">
          {' '}
          <li>
            <span className="num">01</span>
            <span className="rail"></span>
            <h3>Request coaching.</h3>
            <p>
              Tell us about your main health concern, what you’ve tried and your goals in a short
              online form. We review your application and, if coaching looks right for you, invite
              you to a call.
            </p>
          </li>{' '}
          <li>
            <span className="num">02</span>
            <span className="rail"></span>
            <h3>Assessment.</h3>
            <p>
              We review your lab results, symptoms and nervous system patterns to see what is
              driving them.
            </p>
          </li>{' '}
          <li>
            <span className="num">03</span>
            <span className="rail"></span>
            <h3>Your personalized plan.</h3>
            <p>
              You get clear daily actions across nutrition, supplementation, nervous system work and
              lifestyle.
            </p>
          </li>{' '}
          <li>
            <span className="num">04</span>
            <span className="rail"></span>
            <h3>Weekly coaching.</h3>
            <p>
              One session a week, plus a short daily log of sleep, food and how you feel. We track
              your progress and adjust your plan.
            </p>
          </li>{' '}
        </ol>{' '}
      </div>{' '}
    </section>
  );
}
