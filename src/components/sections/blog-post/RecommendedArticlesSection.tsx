import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { SiteTextLink } from '@/components/ui/SiteTextLink';

export function RecommendedArticlesSection() {
  return (
    <section className="sec" aria-labelledby="blog-post-sec-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="head recs-head">
          {' '}
          <h2 id="blog-post-sec-title">Recommended articles</h2>{' '}
          <SiteTextLink href="/blog">
            All articles <Icon name="arrow" />
          </SiteTextLink>{' '}
        </div>{' '}
        <div className="recs">
          {' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a">
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
              <span className="go">
                Read article <Icon name="arrow" />
              </span>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a">
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
              <span className="go">
                Read article <Icon name="arrow" />
              </span>
            </div>{' '}
          </Link>{' '}
          <Link href="/blog/why-do-i-still-feel-tired" className="card-a">
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
              <span className="go">
                Read article <Icon name="arrow" />
              </span>
            </div>{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
