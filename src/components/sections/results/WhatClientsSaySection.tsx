import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';

export function WhatClientsSaySection() {
  return (
    <section className="phero t-hero" aria-labelledby="results-whatclientssay-title">
      {' '}
      <div className="phero-in">
        {' '}
        <div className="phero-copy">
          {' '}
          <h1 id="results-whatclientssay-title">
            What clients say about working with Justin Maguire
          </h1>{' '}
          <p className="sub">
            Clients describe what changed and what working with Justin was like, in their own words.
          </p>{' '}
        </div>{' '}
        <div className="fan" aria-label="Video testimonials">
          {' '}
          <a href="#videos">
            <Image
              src="https://images.unsplash.com/photo-1612374375733-a68c227b72df?w=520&h=720&q=80&auto=format&fit=crop&crop=faces"
              alt=""
              width={520}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <span>
              <i>
                <Icon name="play" />
              </i>
              Shirley
            </span>
          </a>{' '}
          <a href="#videos">
            <Image
              src="https://images.unsplash.com/photo-1788055650503-84b6361002d3?w=520&h=720&q=80&auto=format&fit=crop&crop=faces"
              alt=""
              width={520}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <span>
              <i>
                <Icon name="play" />
              </i>
              Carl
            </span>
          </a>{' '}
          <a href="#videos">
            <Image
              src="https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?w=520&h=720&q=80&auto=format&fit=crop&crop=faces"
              alt=""
              width={520}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <span>
              <i>
                <Icon name="play" />
              </i>
              Vasilis
            </span>
          </a>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
