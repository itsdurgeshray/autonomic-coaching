import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SiteButton } from '@/components/ui/SiteButton';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function AboutTheAuthorSection() {
  return (
    <section className="sec pt0" aria-labelledby="responsive-living-abouttheauthor-title">
      {' '}
      <div className="wrap author">
        {' '}
        <div className="media author-ph">
          <Image
            src="/images/justin-maguire-white-coat.png"
            alt="Justin Maguire"
            width={588}
            height={700}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>{' '}
        <div>
          {' '}
          <SiteEyebrow>Meet the Author</SiteEyebrow>{' '}
          <h2 id="responsive-living-abouttheauthor-title">About the author, Justin Maguire</h2>{' '}
          <p className="body">
            Justin Maguire is a nutritional scientist and health coach, and both Dr. Dominik
            Nischwitz and Tim Gray call him a “blood detective.” He holds a BSc (Hons) in
            Nutritional Science, a Diploma in Functional Blood Chemistry and certifications in
            hormone therapy and nutrigenomics, and is completing an MSc in Neuroscience and
            Psychology of Mental Health.
          </p>{' '}
          <SiteButton href="/about" variant="light">
            Meet Justin <Icon name="arrow" />
          </SiteButton>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
