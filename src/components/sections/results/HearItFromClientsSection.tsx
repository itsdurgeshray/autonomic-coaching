import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { VideoRotator } from '@/components/patterns/enhance/VideoRotator';

export function HearItFromClientsSection() {
  return (
    <section className="sec vband" id="videos" aria-labelledby="results-hearitfromclients-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head">
          <h2 id="results-hearitfromclients-title">Hear it from clients</h2>
        </div>{' '}
        <VideoRotator>
          <div className="vid">
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
                  aria-label="Play Shirley\u2019s video testimonial"
                  type="button"
                >
                  <Icon name="play" />
                </button>{' '}
                <span className="vid-name">Shirley</span>{' '}
              </div>{' '}
              <div className="vid-tabs" role="tablist" aria-label="Video testimonials">
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
      </div>{' '}
    </section>
  );
}
