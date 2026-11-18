import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function WhatOthersSayAboutMyWorkSection() {
  return (
    <section className="others dark sec" aria-labelledby="about-whatotherssayaboutmywork-title">
      {' '}
      <div className="wrap">
        {' '}
        <h2 id="about-whatotherssayaboutmywork-title">What others say about my work</h2>{' '}
        <div className="oq">
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
        <div className="record">
          {' '}
          <p>My work is also in the public record:</p>{' '}
          <div className="rec">
            {' '}
            <div>
              <span className="k">
                <Icon name="i-book-open-text" className="pi" />
                Book
              </span>
              <span className="v">
                <span>
                  <b>Responsive Living</b> (2026), a story-led book on stress, the nervous system
                  and the immune system.
                </span>
                <Link href="/responsive-living">
                  Read about the book <Icon name="arrow" />
                </Link>
              </span>
            </div>{' '}
            <div>
              <span className="k">
                <Icon name="i-microphone-stage" className="pi" />
                Speaking
              </span>
              <span className="v">Health Optimisation Summit, 2022 and 2023</span>
            </div>{' '}
            <div>
              <span className="k">
                <Icon name="i-microphone" className="pi" />
                Podcasts
              </span>
              <span className="v">
                <span>
                  vP Life, “Everything to Know About Immunometabolism and the Cell Danger Response”
                </span>
                <span>
                  Salute e Biohacking, episode 95, “Bidirectional Restoration of the Nervous System”
                </span>
              </span>
            </div>{' '}
            <div>
              <span className="k">
                <Icon name="i-chats-circle" className="pi" />
                Interview
              </span>
              <span className="v">Mark De Gouveia, Thrive Labs</span>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
