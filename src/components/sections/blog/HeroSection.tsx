import { Icon } from '@/components/ui/Icon';
import { SiteEyebrow } from '@/components/ui/SiteEyebrow';

export function HeroSection() {
  return (
    <section className="phero b-hero" aria-labelledby="blog-hero-title">
      {' '}
      <div className="phero-in">
        {' '}
        <div className="phero-copy">
          {' '}
          <SiteEyebrow>Blog</SiteEyebrow>{' '}
          <h1 id="blog-hero-title">Science-led health articles across body and mind</h1>{' '}
          <p className="sub">
            Most health advice treats symptoms one at a time. These articles look at how your
            biology, your psychology, and your daily life connect, from exhaustion and broken sleep
            to hormone shifts and lab results that don’t add up.
          </p>{' '}
        </div>{' '}
        <div className="finder">
          {' '}
          <label className="search">
            <span className="sr">Search articles</span>
            <Icon name="i-magnifying-glass" className="pi" />
            <input type="search" id="q" placeholder="Search articles" autoComplete="off" />
            <button type="button" className="btn btn-primary btn-sm" id="qgo">
              Search
            </button>
          </label>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
