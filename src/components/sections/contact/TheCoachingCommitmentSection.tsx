import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function TheCoachingCommitmentSection() {
  return (
    <section className="sec pt0" aria-labelledby="contact-thecoachingcommitment-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="commit">
          {' '}
          <div className="commit-copy">
            {' '}
            <h2 id="contact-thecoachingcommitment-title">The coaching commitment</h2>{' '}
            <p className="lede">
              If the consultation leads to an invitation, this is what the program involves.
            </p>{' '}
            <p className="body">
              Autonomic Coaching is one-to-one, led by Justin Maguire, a{' '}
              <mark className="tbc">[]</mark> scientist. A collaborating licensed doctor handles
              medical matters.
            </p>{' '}
          </div>{' '}
          <div className="commit-card">
            {' '}
            <p className="k">Each month includes:</p>{' '}
            <ul className="ticks">
              {' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                Four lifestyle coaching sessions
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                Two biopsychosocial reviews, where you score seven markers of how you’re doing
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                A dietary program, adjusted as you progress
              </li>{' '}
              <li>
                <span className="tk">
                  <Icon name="check" />
                </span>
                WhatsApp support, Monday to Friday, 08:00 to 17:00 CAT
              </li>{' '}
            </ul>{' '}
            <p className="body">
              Investigative reviews take place at the start of the program and every three months
              thereafter.
            </p>{' '}
            <p className="body">
              Programs run for 6, 12, or 18 months, starting at $11,111.11 USD, paid upfront. Lab
              tests, supplements, and prescribed treatments are quoted separately.
            </p>{' '}
            <SiteButton href="#request" variant="primary">
              Request Coaching <Icon name="arrow" />
            </SiteButton>{' '}
            <p className="fine">
              We reply to every request within <mark className="tbc">[X]</mark> business days.
              Sending a request doesn’t commit you to anything.
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
