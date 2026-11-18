import { Icon } from '@/components/ui/Icon';

export function WhatColleaguesAndPractitionersSaySection() {
  return (
    <section className="sec pt0" aria-labelledby="results-whatcolleaguesandpractitionerssay-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head">
          <h2 id="results-whatcolleaguesandpractitionerssay-title">
            What colleagues and practitioners say
          </h2>
        </div>{' '}
        <div className="oq light">
          {' '}
          <figure>
            <Icon name="if-quotes" className="qm" />
            <blockquote>
              “His ability to translate complex immunological and biochemical science into practical
              solutions is nothing short of extraordinary.”
            </blockquote>
            <figcaption>
              <span className="mono">KG</span>
              <div>
                Kris Gethin<small>Voted World #1 Transformation Expert</small>
              </div>
            </figcaption>
          </figure>{' '}
          <figure>
            <Icon name="if-quotes" className="qm" />
            <blockquote>
              “His perspective comes from thousands of hours working with hundreds of the world’s
              most optimised humans, including myself.”
            </blockquote>
            <figcaption>
              <span className="mono">TG</span>
              <div>
                Tim Gray<small>Founder, Health Optimisation Summit</small>
              </div>
            </figcaption>
          </figure>{' '}
          <figure>
            <Icon name="if-quotes" className="qm" />
            <blockquote>“...has earned him the reputation of a true blood detective.”</blockquote>
            <figcaption>
              <span className="mono">DN</span>
              <div>
                Dr. Dominik Nischwitz<small>Founder, Biodentistry Global Standard</small>
              </div>
            </figcaption>
          </figure>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
