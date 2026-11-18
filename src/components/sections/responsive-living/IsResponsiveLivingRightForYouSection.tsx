import { Icon } from '@/components/ui/Icon';

export function IsResponsiveLivingRightForYouSection() {
  return (
    <section
      className="sec pt0"
      aria-labelledby="responsive-living-isresponsivelivingrightforyou-title"
    >
      {' '}
      <div className="wrap">
        {' '}
        <div className="head c">
          {' '}
          <h2 id="responsive-living-isresponsivelivingrightforyou-title">
            Is Responsive Living right for you?
          </h2>{' '}
          <p className="lede">The book suits some readers better than others.</p>{' '}
        </div>{' '}
        <div className="cmp">
          {' '}
          <div className="cmp-col">
            {' '}
            <h3>This book is for you if</h3>{' '}
            <ul className="ticks">
              {' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                You’re exhausted, and nobody can tell you why.
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                You’ve tried a lot, and nothing has lasted.
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                You want to understand your own biology rather than follow instructions.
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                You learn better from a story than from a textbook.
              </li>{' '}
            </ul>{' '}
          </div>{' '}
          <div className="cmp-col">
            {' '}
            <h3>This book isn’t for you if</h3>{' '}
            <ul className="ticks no">
              {' '}
              <li>
                <span className="tk">
                  <Icon name="x" />
                </span>
                You want a supplement list or a quick fix.
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="x" />
                </span>
                You want a personal treatment plan.
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="x" />
                </span>
                You want a diagnosis or a replacement for medical care.
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="x" />
                </span>
                You want a one-size-fits-all plan.
              </li>{' '}
            </ul>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
