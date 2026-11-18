import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { VideoRotator } from '@/components/patterns/enhance/VideoRotator';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';
import { SiteTextLink } from '@/components/ui/SiteTextLink';

export function ResultsSection() {
  return (
    <section
      className="sec"
      id="results"
      style={{ paddingTop: '0' }}
      aria-labelledby="home-results-title"
    >
      {' '}
      <div className="wrap">
        {' '}
        <div className="results-head">
          {' '}
          <div>
            {' '}
            <SiteEyebrow>Results</SiteEyebrow>{' '}
            <h2 id="home-results-title">
              Clients come to us after years of dead ends. Here’s what changed.
            </h2>{' '}
          </div>{' '}
          <p className="lede">
            Better energy, sleep, hormones and performance, in their own words.
          </p>{' '}
        </div>{' '}
        <div className="results-body">
          {' '}
          <VideoRotator>
            <div className="vid" id="vid">
              {' '}
              <figure className="slide on">
                <Image
                  src="https://images.unsplash.com/photo-1612374375733-a68c227b72df?w=1800&h=820&q=80&auto=format&fit=crop&crop=faces"
                  alt="Shirley"
                  width={1800}
                  height={820}
                  sizes="(min-width: 1440px) 1440px, 100vw"
                />
              </figure>{' '}
              <figure className="slide">
                <Image
                  src="https://images.unsplash.com/photo-1788055650503-84b6361002d3?w=1800&h=820&q=80&auto=format&fit=crop&crop=faces"
                  alt="Carl"
                  width={1800}
                  height={820}
                  sizes="(min-width: 1440px) 1440px, 100vw"
                />
              </figure>{' '}
              <figure className="slide">
                <Image
                  src="https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?w=1800&h=820&q=80&auto=format&fit=crop&crop=faces"
                  alt="Vasilis"
                  width={1800}
                  height={820}
                  sizes="(min-width: 1440px) 1440px, 100vw"
                />
              </figure>{' '}
              <div className="vid-bar">
                {' '}
                <div className="vid-who">
                  {' '}
                  <button
                    className="vid-play"
                    id="vidPlay"
                    aria-label="Play Shirley\u2019s video testimonial"
                    type="button"
                  >
                    <Icon name="play" />
                  </button>{' '}
                  <span className="vid-name" id="vidName">
                    Shirley
                  </span>{' '}
                </div>{' '}
                <div className="vid-tabs" role="tablist">
                  {' '}
                  <button className="vt active" role="tab" aria-selected="true" type="button">
                    Shirley<i></i>
                  </button>{' '}
                  <button className="vt" role="tab" aria-selected="false" type="button">
                    Carl<i></i>
                  </button>{' '}
                  <button className="vt" role="tab" aria-selected="false" type="button">
                    Vasilis<i></i>
                  </button>{' '}
                </div>{' '}
              </div>{' '}
            </div>
          </VideoRotator>{' '}
          <div className="quotes">
            {' '}
            <figure className="q">
              <div>
                <Icon name="if-quotes" className="pi qm" />
                <blockquote>
                  “Justin figured out what several other practitioners couldn’t. I finally healed
                  after years of frustration.”
                </blockquote>
              </div>
              <figcaption>
                <span className="mono">JK</span>Julianne Keehan
              </figcaption>
            </figure>{' '}
            <figure className="q">
              <div>
                <Icon name="if-quotes" className="pi qm" />
                <blockquote>
                  “Being in the medical field myself, I was blown away by how detailed and accurate
                  Justin’s approach was.”
                </blockquote>
              </div>
              <figcaption>
                <span className="mono">JT</span>IFBB Pro Joe Tong
              </figcaption>
            </figure>{' '}
            <figure className="q">
              <div>
                <Icon name="if-quotes" className="pi qm" />
                <blockquote>
                  “My energy, body composition and stress levels transformed. The best investment
                  I’ve ever made.”
                </blockquote>
              </div>
              <figcaption>
                <span className="mono">MK</span>Mete Karan
              </figcaption>
            </figure>{' '}
          </div>{' '}
        </div>{' '}
        <div className="results-foot">
          <SiteTextLink href="/results">
            See all results <Icon name="arrow" />
          </SiteTextLink>
        </div>{' '}
      </div>{' '}
    </section>
  );
}
