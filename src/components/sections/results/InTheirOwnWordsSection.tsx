import { Icon } from '@/components/ui/Icon';

export function InTheirOwnWordsSection() {
  return (
    <section className="sec" aria-labelledby="results-intheirownwords-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head">
          <h2 id="results-intheirownwords-title">In their own words</h2>
        </div>{' '}
        <div className="bento">
          {' '}
          <figure className="bq f">
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “My energy, body composition and stress levels transformed. The best investment I’ve
              ever made.”
            </blockquote>{' '}
            <figcaption>
              <span className="mono">MK</span>Mete Karan
            </figcaption>{' '}
          </figure>{' '}
          <figure className="bq m">
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “Justin figured out what several other practitioners couldn’t. I finally healed after
              years of frustration.”
            </blockquote>{' '}
            <figcaption>
              <span className="mono g">JK</span>Julianne Keehan
            </figcaption>{' '}
          </figure>{' '}
          <figure className="bq s">
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “Being in the medical field myself, I was blown away by how detailed and accurate
              Justin’s approach was.”
            </blockquote>{' '}
            <figcaption>
              <span className="mono">JT</span>IFBB Pro Joe Tong
            </figcaption>{' '}
          </figure>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
