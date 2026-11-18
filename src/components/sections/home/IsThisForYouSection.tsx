import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { FitCheck } from '@/components/patterns/enhance/FitCheck';
import { SiteButton } from '@/components/ui/SiteButton';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function IsThisForYouSection() {
  return (
    <section
      className="sec"
      id="fit"
      style={{ paddingTop: '0' }}
      aria-labelledby="home-isthisforyou-title"
    >
      {' '}
      <FitCheck>
        <div className="wrap">
          {' '}
          <div className="center fit-head">
            {' '}
            <SiteEyebrow>Is this for you?</SiteEyebrow>{' '}
            <h2 id="home-isthisforyou-title">
              Built for high performers who are ready to stop guessing about their health.
            </h2>{' '}
          </div>{' '}
          <div className="fit-card" id="fitCard">
            {' '}
            <div className="fit-img">
              <Image
                src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=1400&q=80&auto=format"
                alt="A smiling young man against a soft teal wall"
                width={1400}
                height={933}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="fit-main">
              {' '}
              <h3>This is for you if:</h3>{' '}
              <div className="checks">
                {' '}
                <button className="check" aria-pressed="false" type="button">
                  <span className="box-c">
                    <Icon name="check" />
                  </span>
                  Your health is holding back your work, energy or life
                </button>{' '}
                <button className="check" aria-pressed="false" type="button">
                  <span className="box-c">
                    <Icon name="check" />
                  </span>
                  You’ve tried doctors, programs or supplements without lasting results
                </button>{' '}
                <button className="check" aria-pressed="false" type="button">
                  <span className="box-c">
                    <Icon name="check" />
                  </span>
                  You want a personalised, hands-on approach, not a template
                </button>{' '}
                <button className="check" aria-pressed="false" type="button">
                  <span className="box-c">
                    <Icon name="check" />
                  </span>
                  You’re ready to commit to real change
                </button>{' '}
              </div>{' '}
              <div className="fit-not">
                {' '}
                <span className="lbl">This isn’t for you if:</span>{' '}
                <ul className="nots">
                  {' '}
                  <li>
                    <span className="x">
                      <Icon name="x" />
                    </span>
                    You want a quick fix or a one-off plan
                  </li>{' '}
                  <li>
                    <span className="x">
                      <Icon name="x" />
                    </span>
                    You need emergency or urgent medical care
                  </li>{' '}
                </ul>{' '}
              </div>{' '}
              <div className="fit-foot">
                {' '}
                <SiteButton href="#request" variant="primary">
                  Request Coaching <Icon name="arrow" />
                </SiteButton>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>
      </FitCheck>{' '}
    </section>
  );
}
