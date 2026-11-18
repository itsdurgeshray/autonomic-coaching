import { Icon } from '@/components/ui/Icon';

export function EndorsedBySection() {
  return (
    <section className="sec pt0" aria-labelledby="responsive-living-endorsedby-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head">
          <h2 id="responsive-living-endorsedby-title">Endorsed By</h2>
        </div>{' '}
        <div className="endorse">
          {' '}
          <figure>
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “This isn’t a quick fix or another trendy protocol; it’s a roadmap that can help you
              understand your body at a deeper level.”
            </blockquote>{' '}
            <figcaption>
              <strong>Kris Gethin</strong>
              <small>
                Voted World #1 Transformation Expert. Co-founder, Unmatched Supplements and Kris
                Gethin Gyms.
              </small>
            </figcaption>{' '}
          </figure>{' '}
          <figure>
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “The immune system is not broken. It is responding appropriately to a world that has
              changed faster than our biology.”
            </blockquote>{' '}
            <figcaption>
              <strong>Dr. Dominik Nischwitz</strong>
              <small>
                World-leading biological dentist. Founder, Biodentistry Global Standard.
              </small>
            </figcaption>{' '}
          </figure>{' '}
          <figure>
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “It’s a framework for understanding how mitochondria, hormones, and immune pathways
              interlock, and how to respond when the body’s signals get out of rhythm.”
            </blockquote>{' '}
            <figcaption>
              <strong>Tim Gray</strong>
              <small>
                UK’s leading biohacker. Founder, Health Optimisation Summit. 400M+ annual content
                views.
              </small>
            </figcaption>{' '}
          </figure>{' '}
          <figure>
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “It bridges the divide between molecular science and lived human experience.”
            </blockquote>{' '}
            <figcaption>
              <strong>Dr. Ahmed Haffejie</strong>
              <small>Integrative and functional medicine practitioner. MBBCH (Wits), ABAARM.</small>
            </figcaption>{' '}
          </figure>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
