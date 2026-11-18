import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function ArticleHeroSection() {
  return (
    <section className="post-hero" aria-labelledby="blog-post-posthero-title">
      {' '}
      <header className="a-head">
        {' '}
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/blog">Blog</Link>
          <Icon name="arrow" />
          <span className="cat">Sleep</span>
        </nav>{' '}
        <h1 id="blog-post-posthero-title">Why do I still feel tired after a full night’s sleep?</h1>{' '}
        <p className="lede dek">
          If you’re exhausted, wired, and told your labs are normal, this is the space your body
          lost.
        </p>{' '}
        <div className="byline">
          {' '}
          <span className="who">
            <Image
              src="/images/justin-maguire-white-coat.png"
              alt=""
              width={588}
              height={700}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <span>
              Justin Maguire<small>Nutritional scientist and health coach</small>
            </span>
          </span>{' '}
          <span className="m">
            <Icon name="i-calendar-blank" className="pi" />
            Published 12 October 2026
          </span>{' '}
          <span className="m">
            <Icon name="i-clock" className="pi" />6 min read
          </span>{' '}
        </div>{' '}
      </header>{' '}
      <div className="a-cover">
        <div className="ph">
          <Image
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=2400&h=1029&fit=crop&q=80&auto=format"
            alt="A person sitting at the end of a wooden pier on a still mountain lake"
            width={2400}
            height={1029}
            sizes="(min-width: 1440px) 1440px, 100vw"
          />
        </div>
      </div>{' '}
    </section>
  );
}
