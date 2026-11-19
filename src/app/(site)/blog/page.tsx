import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/blog/HeroSection';
import { StartHereSection } from '@/components/sections/blog/StartHereSection';
import { LatestArticlesSection } from '@/components/sections/blog/LatestArticlesSection';
import { RequestCoachingSection } from '@/components/sections/blog/RequestCoachingSection';
import { BlogFilter } from '@/components/patterns/enhance/BlogFilter';
import '@/styles/pages/blog.css';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description:
    "Science-led health articles across body and mind, from exhaustion and broken sleep to hormone shifts and lab results that don't add up.",
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div data-page="blog" className="page-root">
      <HeroSection />
      <StartHereSection />
      <LatestArticlesSection />
      <RequestCoachingSection />
      <BlogFilter />
    </div>
  );
}
