import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

/** The one article to read first, as a wide featured card */
export function StartHereSection() {
  return (
    <section className="sec pt0" id="start" aria-labelledby="blog-starthere-title">
      <div className="wrap">
        <Link href="/blog/why-do-i-still-feel-tired" className="feat">
          <div className="ph">
            <Image
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1800&h=1013&fit=crop&q=80&auto=format"
              alt="A person sitting at the end of a wooden pier on a still mountain lake"
              width={1800}
              height={1013}
              sizes="(min-width: 1360px) 1280px, 100vw"
              priority
            />
            <span className="label">Start here</span>
          </div>
          <div className="feat-body">
            <div>
              <span className="label">Sleep</span>
              <h2 id="blog-starthere-title">
                Why do I still feel tired after a full night’s sleep?
              </h2>
              <p className="intro">
                If you’re exhausted, wired, and told your labs are normal, this is the space your
                body lost.
              </p>
            </div>
            <div className="side">
              <span className="btn btn-primary">
                Read article <Icon name="arrow" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
