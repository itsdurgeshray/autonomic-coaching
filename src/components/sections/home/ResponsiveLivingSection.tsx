import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function ResponsiveLivingSection() {
  return (
    <section
      className="sec pt0"
      id="responsive-living"
      aria-labelledby="home-responsiveliving-title"
    >
      {' '}
      <div className="wrap">
        {' '}
        <div className="rl-card">
          {' '}
          <div>
            {' '}
            <SiteEyebrow>Responsive Living</SiteEyebrow>{' '}
            <h2 id="home-responsiveliving-title">
              Responsive Living: training your body to handle pressure without burning out.
            </h2>{' '}
            <p className="lede">
              Our approach to building a nervous system and daily habits that adapt to stress,
              travel and demanding schedules instead of breaking down under them.
            </p>{' '}
            <p className="body">
              Your body is constantly responding to food, sleep, light, stress and life. Responsive
              Living teaches it to respond well, so you stay sharp, energised and resilient when
              life gets intense.
            </p>{' '}
            <SiteButton href="/responsive-living" variant="primary">
              Explore Responsive Living <Icon name="arrow" />
            </SiteButton>{' '}
          </div>{' '}
          <div className="rl-book" aria-hidden="true">
            {' '}
            <div className="sun"></div>{' '}
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
        </div>{' '}
      </div>{' '}
    </section>
  );
}
