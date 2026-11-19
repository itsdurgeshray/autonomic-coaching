import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function LatestArticlesSection() {
  return (
    <section className="sec pt0" id="latest" aria-labelledby="blog-latestarticles-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head list-head">
          <h2 id="blog-latestarticles-title">Latest articles</h2>
          <span className="count" id="count"></span>
        </div>{' '}
        <div className="grid" id="grid">
          {' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="lab">
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
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="ner">
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
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="exh">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Exhaustion</span>
              <h3>Energy that crashes mid-afternoon</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="slp">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Sleep</span>
              <h3>You can’t switch off, even when the day is over</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="lab">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Lab results</span>
              <h3>What lab work can and can’t tell you</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="hor">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Hormones</span>
              <h3>
                Where it hides and how it shows up: from the mouth to your hormones and thyroid
              </h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="gut">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Gut health</span>
              <h3>How food affects immune balance</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a" data-t="ner">
            {' '}
            <div className="ph">
              <Image
                src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=720&h=450&fit=crop&q=80&auto=format"
                alt=""
                width={720}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>{' '}
            <div className="in">
              <span className="label">Nervous system</span>
              <h3>Static physiology: the alarm goes off, and nothing moves</h3>
              <div className="c-foot">
                <span className="go">
                  Read article <Icon name="arrow" />
                </span>
              </div>
            </div>{' '}
          </Link>{' '}
        </div>{' '}
        <p className="empty" id="empty">
          No articles match that search yet.
        </p>{' '}
      </div>{' '}
    </section>
  );
}
