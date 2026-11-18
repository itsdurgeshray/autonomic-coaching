import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function PrecisionCoachingSection() {
  return (
    <section className="sec" id="precision" aria-labelledby="home-precisioncoaching-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="center precision-head">
          {' '}
          <SiteEyebrow>Precision coaching, built around your biology</SiteEyebrow>{' '}
          <h2 id="home-precisioncoaching-title">
            Your bloodwork, genetics and nervous system, turned into one plan that adapts every
            week.
          </h2>{' '}
          <p className="lede">
            Most programs hand you a static protocol. We read the full picture, act on it, then
            adjust as your body responds.
          </p>{' '}
        </div>{' '}
        <div className="scan-layout">
          {' '}
          <div className="pillars l">
            {' '}
            <div className="pillar">
              {' '}
              <div className="pillar-top">
                <span className="ic">
                  <Icon name="i-test-tube" className="pi" />
                </span>
                <span className="num">01</span>
                <span className="wire"></span>
              </div>{' '}
              <h3>Data-led from day one.</h3>{' '}
              <p>
                Blood work, genetics, hormones and symptom patterns, analysed together to find root
                causes.
              </p>{' '}
            </div>{' '}
            <div className="pillar">
              {' '}
              <div className="pillar-top">
                <span className="ic">
                  <Icon name="i-heartbeat" className="pi" />
                </span>
                <span className="num">02</span>
                <span className="wire"></span>
              </div>{' '}
              <h3>Nervous system first.</h3>{' '}
              <p>We calm your stress response so your body can recover, repair and perform.</p>{' '}
            </div>{' '}
          </div>{' '}
          <div className="scan" aria-hidden="true">
            {' '}
            <Image
              src="https://images.unsplash.com/photo-1719603785926-fa6c6e10fb90?w=1300&q=82&auto=format"
              alt=""
              width={1300}
              height={866}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />{' '}
            <div className="beam"></div>{' '}
          </div>{' '}
          <div className="pillars r">
            {' '}
            <div className="pillar">
              {' '}
              <div className="pillar-top">
                <span className="ic">
                  <Icon name="i-calendar-check" className="pi" />
                </span>
                <span className="num">03</span>
                <span className="wire"></span>
              </div>{' '}
              <h3>Weekly one-to-one coaching.</h3>{' '}
              <p>
                You get real access and real-time adjustments, not a PDF and a three-month check-in.
              </p>{' '}
            </div>{' '}
            <div className="pillar">
              {' '}
              <div className="pillar-top">
                <span className="ic">
                  <Icon name="i-arrows-clockwise" className="pi" />
                </span>
                <span className="num">04</span>
                <span className="wire"></span>
              </div>{' '}
              <h3>A plan that moves with your life.</h3>{' '}
              <p>
                Travel, deadlines, training and stress all shift what your body needs, so your
                protocol shifts too.
              </p>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className="proof center">
          {' '}
          <span className="ic">
            <Icon name="i-seal-check" className="pi" />
          </span>{' '}
          <h3>Proven on complex cases.</h3>{' '}
          <p>A decade of results with clients who came to us after years of dead ends.</p>{' '}
          <SiteButton href="#request" variant="primary">
            Request Coaching <Icon name="arrow" />
          </SiteButton>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
