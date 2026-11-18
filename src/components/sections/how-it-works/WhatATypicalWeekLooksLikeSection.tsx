import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';

export function WhatATypicalWeekLooksLikeSection() {
  return (
    <section className="sec pt0" aria-labelledby="how-it-works-whatatypicalweeklookslike-title">
      {' '}
      <div className="wrap week">
        {' '}
        <div className="cal" aria-hidden="true">
          {' '}
          <div className="cal-h">
            <strong>Weekly coaching</strong>
            <span className="pill line">
              <Icon name="i-globe-hemisphere-west" className="pi" />
              Online, worldwide
            </span>
          </div>{' '}
          <div className="days">
            {' '}
            <div className="day">
              <b>Mon</b>
              <div className="lg">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>{' '}
            <div className="day s">
              <b>Tue</b>
              <Image
                src="/images/justin-maguire-arms-crossed.png"
                alt=""
                width={1100}
                height={1439}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <span>Weekly session</span>
            </div>{' '}
            <div className="day">
              <b>Wed</b>
              <div className="lg">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>{' '}
            <div className="day">
              <b>Thu</b>
              <div className="lg">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>{' '}
            <div className="day">
              <b>Fri</b>
              <div className="lg">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>{' '}
            <div className="day">
              <b>Sat</b>
              <div className="lg">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>{' '}
            <div className="day">
              <b>Sun</b>
              <div className="lg">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>{' '}
          </div>{' '}
          <div className="cal-legend">
            <span>
              <i></i>Sleep
            </span>
            <span>
              <i></i>Food
            </span>
            <span>
              <i></i>How you feel
            </span>
          </div>{' '}
        </div>{' '}
        <div>
          {' '}
          <h2 id="how-it-works-whatatypicalweeklookslike-title">
            What a typical week looks like
          </h2>{' '}
          <p className="body">
            We meet once a week, one-to-one and online, so you can work with us from anywhere in the
            world. Between sessions, you fill in a short daily log of your sleep, food and how you
            feel. That way we work from what happened that week, not from memory.
          </p>{' '}
          <p className="body">
            In each session, we go through the log, see what changed, and decide what to adjust. We
            explain the reasoning behind each adjustment, and you make the decisions.
          </p>{' '}
          <p className="body">
            Travel, deadlines, training and stress all shift what your body needs, so the plan
            shifts with them, week by week instead of at a three-month check-in.
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
