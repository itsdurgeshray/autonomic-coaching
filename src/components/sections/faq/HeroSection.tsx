import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function HeroSection() {
  return (
    <section className="h-hero" aria-labelledby="faq-hero-title">
      {' '}
      <div className="h-in">
        {' '}
        <h1 id="faq-hero-title">Understanding Autonomic Coaching</h1>{' '}
        <p className="sub">
          What to expect, how the process works, and whether it&apos;s the right approach for you.
        </p>{' '}
        <p className="intro">
          Choosing a health coach is a big decision, and it’s natural to have questions before you
          reach out. These answers cover who coaching suits, what working together looks like, what
          the commitment involves, and how we protect your information. If yours isn’t here,{' '}
          <Link href="/contact">write to the team</Link> and we’ll be glad to answer it.
        </p>{' '}
        <label className="search">
          <span className="sr">Search questions</span>
          <Icon name="i-magnifying-glass" className="pi" />
          <input type="search" id="q" placeholder="Search questions" autoComplete="off" />
        </label>{' '}
      </div>{' '}
    </section>
  );
}
