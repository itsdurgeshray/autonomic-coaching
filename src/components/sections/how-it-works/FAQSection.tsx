import { FaqItem } from '@/components/patterns/FaqItem';

export function FAQSection() {
  return (
    <section className="sec pt0" aria-labelledby="how-it-works-faq-title">
      {' '}
      <div className="wrap faq">
        {' '}
        <div className="faq-left">
          <h2 id="how-it-works-faq-title">Frequently asked questions</h2>
        </div>{' '}
        <div className="faq-list">
          {' '}
          <FaqItem isOpen question={<>Do I need lab tests to start coaching?</>}>
            <p>
              In most cases, yes. Blood work is the starting point for the assessment, and we
              recommend the tests that apply to you.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Is coaching the same as therapy?</>}>
            <p>
              No. Therapy is treatment you receive, while coaching is learning you do. Some
              countries, including South Africa, regulate the two differently.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Does coaching replace my doctor?</>}>
            <p>No. Anything urgent should go to your own doctor or emergency services.</p>
          </FaqItem>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
