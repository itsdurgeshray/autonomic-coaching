import { Icon } from '@/components/ui/Icon';

export function WhatHappensNextSection() {
  return (
    <section className="sec pt0" aria-labelledby="contact-whathappensnext-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head">
          <h2 id="contact-whathappensnext-title">What happens next</h2>
        </div>{' '}
        <ol className="nsteps">
          {' '}
          <li>
            <span className="ic soft">
              <Icon name="i-paper-plane-tilt" className="pi" />
            </span>
            <span className="num">01</span>
            <h3>Send your request</h3>
            <p>
              Share what you’ve been experiencing by answering eight short questions about your
              health and goals. There’s no need for a complete medical history.
            </p>
          </li>{' '}
          <li>
            <span className="ic soft">
              <Icon name="i-chats-circle" className="pi" />
            </span>
            <span className="num">02</span>
            <h3>Suitability consultation</h3>
            <p>
              The team arranges a conversation about your history, symptoms, routines, and goals,
              supported by an intake form. It’s a chance to ask your own questions too.
            </p>
          </li>{' '}
          <li>
            <span className="ic soft">
              <Icon name="i-compass" className="pi" />
            </span>
            <span className="num">03</span>
            <h3>Your next step</h3>
            <p>
              You may be invited to join the programme. If coaching isn’t the right next step, we’ll
              say so and help point you towards more suitable support.
            </p>
          </li>{' '}
        </ol>{' '}
      </div>{' '}
    </section>
  );
}
