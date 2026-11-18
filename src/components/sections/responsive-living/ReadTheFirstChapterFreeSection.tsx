import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { FormValidate } from '@/components/patterns/enhance/FormValidate';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function ReadTheFirstChapterFreeSection() {
  return (
    <section
      className="sec pt0"
      id="chapter"
      aria-labelledby="responsive-living-readthefirstchapterfree-title"
    >
      {' '}
      <div className="wrap">
        {' '}
        <div className="panel chapter">
          {' '}
          <div className="chapter-art" aria-hidden="true">
            {' '}
            <div className="page">
              {' '}
              <SiteEyebrow>Chapter 1</SiteEyebrow>{' '}
              <p>Mitochondria: the unseen engine of immunity and energy</p> <i></i>
              <i style={{ width: '92%' }}></i>
              <i></i>
              <i style={{ width: '78%' }}></i>
              <i></i>
              <i style={{ width: '64%' }}></i>
              <i></i>
              <i style={{ width: '84%' }}></i>{' '}
            </div>{' '}
            <div className="cover">
              <Image
                src="/images/responsive-living-book-cover.jpg"
                alt=""
                width={1004}
                height={1500}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
          </div>{' '}
          <FormValidate>
            <div className="chapter-copy" id="chapterBox">
              {' '}
              <h2 id="responsive-living-readthefirstchapterfree-title">
                Read the first chapter free
              </h2>{' '}
              <p className="lede">
                If that sounds like you, start with the introduction and Chapter 1, “Mitochondria:
                the unseen engine of immunity and energy.” Enter your email, and we’ll send it
                straight to you.
              </p>{' '}
              <form className="rform" data-form="chapter" noValidate>
                {' '}
                <label className="rf">
                  <span>
                    First name <small>(optional)</small>
                  </span>
                  <input
                    type="text"
                    name="first_name"
                    autoComplete="given-name"
                    placeholder="First name"
                  />
                </label>{' '}
                <label className="rf">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    data-req=""
                    data-msg="Please add a valid email address."
                  />
                </label>{' '}
                <div className="rform-foot full">
                  <span className="err" role="alert"></span>
                  <button className="btn btn-primary" type="submit">
                    Send me the chapter <Icon name="arrow" />
                  </button>
                </div>{' '}
                <p className="fine full">
                  We’ll send the chapter and occasional notes from Justin. Unsubscribe any time.
                </p>{' '}
              </form>{' '}
              <div className="fdone" role="status">
                {' '}
                <span className="ok">
                  <Icon name="check" />
                </span>{' '}
                <strong>Thank you. The chapter is on its way.</strong>{' '}
                <p>
                  We’ll send the chapter and occasional notes from Justin. Unsubscribe any time.
                </p>{' '}
              </div>{' '}
            </div>
          </FormValidate>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
