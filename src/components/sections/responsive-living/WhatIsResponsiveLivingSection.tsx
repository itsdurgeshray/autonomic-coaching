import { GapComparator } from '@/components/patterns/enhance/GapComparator';

export function WhatIsResponsiveLivingSection() {
  return (
    <section
      className="sec pt0"
      id="what"
      aria-labelledby="responsive-living-whatisresponsiveliving-title"
    >
      {' '}
      <div className="wrap">
        {' '}
        <div className="what">
          {' '}
          <h2 id="responsive-living-whatisresponsiveliving-title">
            What is Responsive Living?
          </h2>{' '}
          <div>
            {' '}
            <p className="body">
              Responsive Living is the practice of reading your biology, your psychology, and your
              daily life together, and adjusting as each one changes. There’s a gap between what
              happens to you and how your body responds. Under constant stress, that gap closes, and
              the body stays on alert. Responsive Living widens it again.
            </p>{' '}
            <p className="body">
              For most of human history, stress was physical. You ran, fought, or hid, and the
              stress response burned itself out in the action. Today’s stress is mental: deadlines,
              money, a phone that never stops. The alarm goes off, and nothing moves. Justin Maguire
              calls this static physiology, and the book traces how a body stuck in it can stay in
              defense mode for years: tired, inflamed, and slow to recover.
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <GapComparator>
          <div className="gapviz" id="gapviz" data-state="rl">
            {' '}
            <div className="gv-top">
              {' '}
              <div className="seg" role="group" aria-label="Compare">
                {' '}
                <button type="button" data-set="stress" aria-pressed="false">
                  Under constant stress
                </button>{' '}
                <button type="button" data-set="rl" aria-pressed="true">
                  Responsive Living
                </button>{' '}
              </div>{' '}
              <div className="gv-cap" aria-live="polite">
                {' '}
                <p data-for="stress">
                  Under constant stress, that gap closes, and the body stays on alert.
                </p>{' '}
                <p data-for="rl">Responsive Living widens it again.</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="gv">
              {' '}
              <div className="gv-col l">
                {' '}
                <span className="lbl">What happens to you</span>{' '}
                <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
                  <path className="base" d="M0 40 H200" />
                  <path
                    className="wave"
                    d="M0 40 L70 40 L82 8 L96 72 L110 20 L122 58 L134 40 L200 40"
                  />
                </svg>{' '}
              </div>{' '}
              <div className="gv-space">
                <span className="span"></span>
                <span className="tag">Space</span>
              </div>{' '}
              <div className="gv-col r">
                {' '}
                <span className="lbl">How your body responds</span>{' '}
                <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="gvCalm" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#4fd1a0" stopOpacity=".35" />
                      <stop offset="1" stopColor="#4fd1a0" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gvAlert" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#fb923c" stopOpacity=".35" />
                      <stop offset="1" stopColor="#fb923c" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="base" d="M0 40 H200" />
                  <path
                    className="area"
                    d="M0 40 C 30 40, 44 26, 66 26 S 104 54, 130 54 S 170 40, 200 40 L200 80 L0 80 Z"
                  />
                  <path
                    className="wave"
                    d="M0 40 C 30 40, 44 26, 66 26 S 104 54, 130 54 S 170 40, 200 40"
                  />
                </svg>{' '}
                <span className="live"></span>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </GapComparator>{' '}
      </div>{' '}
    </section>
  );
}
