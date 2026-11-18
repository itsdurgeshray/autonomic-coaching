import { FaqItem } from '@/components/patterns/FaqItem';

export function FAQsSection() {
  return (
    <section className="sec pt0" aria-labelledby="responsive-living-faqs-title">
      {' '}
      <div className="wrap faq">
        {' '}
        <div className="faq-left">
          {' '}
          <h2 id="responsive-living-faqs-title">FAQs</h2>{' '}
          <p className="lede">Still deciding? These are the questions readers ask most.</p>{' '}
        </div>{' '}
        <div className="faq-list">
          {' '}
          <FaqItem isOpen question={<>What is Responsive Living?</>}>
            <p>
              Responsive Living is the practice of reading your biology, your psychology and your
              daily life together, and adjusting as each one changes. It’s also the title of Justin
              Maguire’s book, which explains the idea through one man’s story.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Is this book medical advice?</>}>
            <p>
              No. It’s written for information and understanding, and the author isn’t a medical
              professional. Talk to a qualified healthcare provider before making decisions about
              your health. For anything urgent, contact your own doctor or emergency services.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Is the book only about allergies?</>}>
            <p>
              No. The story follows a man whose symptoms lean toward allergies, gut and skin
              trouble, but it covers energy, thyroid, hormones, stress, and the nervous system too.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Does the book tell me what to take?</>}>
            <p>
              It explains how different approaches work and includes reference notes on protocols.
              None of it is a personal plan, and what suits you depends on your lab results, your
              history, and a qualified clinician.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Do I need lab work to read the book?</>}>
            <p>
              No. You can read the book without it. Lab work helps once you want to apply the ideas,
              and the later chapters explain what it can and can’t tell you.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>How is this different from biohacking?</>}>
            <p>
              Biohacking often starts with a tool or a protocol. Responsive Living starts with how
              your body responds to stress and why, then lets that shape every choice.
            </p>
          </FaqItem>{' '}
          <FaqItem question={<>Is there an audiobook?</>}>
            <p>Yes. It’s available on Audible, Spotify, and Apple.</p>
          </FaqItem>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
