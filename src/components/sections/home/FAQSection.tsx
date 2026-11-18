import { FaqItem } from '@/components/patterns/FaqItem';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function FAQSection() {
  return (
    <section className="sec" id="faq" style={{ paddingTop: '0' }} aria-labelledby="home-faq-title">
      {' '}
      <div className="wrap faq">
        {' '}
        <div className="faq-left">
          {' '}
          <SiteEyebrow>FAQ</SiteEyebrow>{' '}
          <h2 id="home-faq-title">What to know before you request coaching.</h2>{' '}
        </div>{' '}
        <div className="faq-list">
          {' '}
          <FaqItem isOpen question={<>Who do you work with?</>}>
            <p>
              Founders, executives, athletes and high performers whose health is getting in the way
              of how they want to live and work.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Is coaching online?</>}>
            <p>Yes. You can work with us from anywhere in the world.</p>
          </FaqItem>{' '}
          <FaqItem question={<>Do I need lab tests?</>}>
            <p>
              In most cases, yes. We’ll recommend the right tests for you and explain exactly what
              they show.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>How long does coaching last?</>}>
            <p>
              Most clients work with us for at least 3–6 months, because lasting change takes time
              to build.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>What happens after I request coaching?</>}>
            <p>
              We review your request and, if it’s a good fit, invite you to a call to discuss next
              steps.
            </p>
          </FaqItem>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
