import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function StartHereSection() {
  return (
    <section className="sec pt0" id="start" aria-labelledby="blog-starthere-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head shead-row">
          {' '}
          <h2 id="blog-starthere-title">Start here</h2>{' '}
          <p className="lede">
            If you’re new here, these three cover the questions people ask first.
          </p>{' '}
        </div>{' '}
        <div className="three grid">
          {' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&h=750&fit=crop&q=80&auto=format"
                alt=""
                width={1200}
                height={750}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Sleep</span>
              <h3>Why do I still feel tired after a full night’s sleep?</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Lab results</span>
              <h3>“Normal” labs don’t mean you’re well</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Nervous system</span>
              <h3>What is Responsive Living?</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
