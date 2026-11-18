import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function JustinMaguireSection() {
  return (
    <section className="ab-hero" aria-labelledby="about-justinmaguire-title">
      {' '}
      <div className="ab-stage">
        {' '}
        <div className="ab-copy">
          {' '}
          <Icon name="if-quotes" className="qm" />{' '}
          <blockquote className="ab-quote">
            “Rather than asking what diagnosis a person has, I focus on understanding the underlying
            physiological systems influencing their health.”
          </blockquote>{' '}
          <div className="ab-sign">
            <div>
              <h1 id="about-justinmaguire-title">Justin Maguire</h1>
              <p>scientist and health coach</p>
            </div>
          </div>{' '}
          <p className="ab-intro">
            Justin Maguire is a nutritional scientist and one-to-one health coach. He reads lab
            results, daily tracking and a client’s psychology together to find the patterns that
            each one misses when it’s looked at alone.
          </p>{' '}
          <SiteButton href="#request" variant="primary">
            Request Coaching <Icon name="arrow" />
          </SiteButton>{' '}
        </div>{' '}
        <div className="ab-person">
          <Image
            src="/images/justin-maguire-arms-crossed.png"
            alt="Justin Maguire"
            width={1100}
            height={1439}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>{' '}
      </div>{' '}
      <ul className="creds" aria-label="Qualifications">
        {' '}
        <li>BSc (Hons) Nutritional Science</li>{' '}
        <li>Postgraduate Diploma, Functional Blood Chemistry Analysis</li>{' '}
        <li>MSc in Neuroscience and Psychology of Mental Health (in progress)</li>{' '}
        <li>Author of Responsive Living</li>{' '}
      </ul>{' '}
    </section>
  );
}
