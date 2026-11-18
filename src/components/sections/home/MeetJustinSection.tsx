import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';
import { SiteTextLink } from '@/components/ui/SiteTextLink';

export function MeetJustinSection() {
  return (
    <section className="sec" id="justin" aria-labelledby="home-meetjustin-title">
      {' '}
      <div className="wrap justin">
        {' '}
        <article className="pcard">
          {' '}
          <div className="ph">
            <Image
              src="/images/justin-maguire-white-coat.png"
              alt="Justin Maguire"
              width={588}
              height={700}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>{' '}
          <div className="cap">
            {' '}
            <button className="play" aria-label="Play Justin\u2019s intro video" type="button">
              <Icon name="play" />
            </button>{' '}
          </div>{' '}
        </article>{' '}
        <div className="justin-copy">
          {' '}
          <SiteEyebrow>Meet Justin</SiteEyebrow>{' '}
          <h2 id="home-meetjustin-title">
            <span>Justin Maguire:</span> 10+ years turning complex health cases into clear, daily
            action.
          </h2>{' '}
          <p className="lede">
            He reads your labs, your symptoms and your nervous system together, then works with you
            every week to make the changes stick.
          </p>{' '}
          <p className="body">
            For over a decade, Justin has helped founders, executives and high performers get their
            energy, focus and health back, often after other practitioners ran out of answers. His
            approach combines detailed testing with intuition and real human support, and he stays
            with you every step of the way.
          </p>{' '}
          <div>
            <SiteTextLink href="/about">
              Read Justin’s story <Icon name="arrow" />
            </SiteTextLink>
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
