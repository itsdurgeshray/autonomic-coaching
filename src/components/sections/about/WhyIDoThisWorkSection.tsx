import Image from 'next/image';

export function WhyIDoThisWorkSection() {
  return (
    <section className="sec" aria-labelledby="about-whyidothiswork-title">
      {' '}
      <div className="wrap why">
        {' '}
        <div className="media why-ph">
          <Image
            src="/images/justin-maguire-white-coat.png"
            alt="Justin Maguire"
            width={588}
            height={700}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>{' '}
        <div className="why-copy">
          {' '}
          <h2 id="about-whyidothiswork-title">Why I do this work</h2>{' '}
          <p className="statement">
            I want wellness to be more proactive and more personal. My aim is to give people the
            education, insight, and support to take more ownership of their health: to reduce
            confusion and restore confidence.
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
