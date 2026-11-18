import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';

export function HeroSection() {
  return (
    <section className="phero rl-hero" aria-labelledby="responsive-living-hero-title">
      {' '}
      <div className="phero-in">
        {' '}
        <div className="phero-copy">
          {' '}
          <h1 id="responsive-living-hero-title">
            Between stress and response, there&apos;s a space.
          </h1>{' '}
          <p className="sub">
            Responsive Living follows one man who learned to widen that space and explains the
            biology of what happens when it closes.
          </p>{' '}
          <p className="kicker">
            If you&apos;re exhausted, wired, and told your labs are normal, this is the space your
            body lost.
          </p>{' '}
          <div className="ctas">
            {' '}
            <SiteButton href="#buy" variant="primary">
              Buy the Book <Icon name="arrow" />
            </SiteButton>{' '}
          </div>{' '}
        </div>{' '}
        <div className="cover-stage">
          {' '}
          <div className="sun"></div> <div className="floor"></div>{' '}
          <div className="cover">
            <Image
              src="/images/responsive-living-book-cover.jpg"
              alt="Responsive Living by Justin Maguire, book cover"
              width={1004}
              height={1500}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
