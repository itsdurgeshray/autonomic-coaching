import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ArticleHeroSection } from '@/components/sections/blog-post/ArticleHeroSection';
import { ArticleBodySection } from '@/components/sections/blog-post/ArticleBodySection';
import { RecommendedArticlesSection } from '@/components/sections/blog-post/RecommendedArticlesSection';
import { RequestCoachingSection } from '@/components/sections/blog-post/RequestCoachingSection';
import '@/styles/pages/blog-post.css';

export const metadata: Metadata = buildMetadata({
  title: "Why do I still feel tired after a full night's sleep?",
  description:
    'Why you can sleep eight hours and still wake up tired, and how Responsive Living explains the gap between stress and response.',
  path: '/blog/why-do-i-still-feel-tired',
});

export default function BlogPostPage() {
  return (
    <div data-page="blog-post" className="page-root">
      <ArticleHeroSection />
      <ArticleBodySection />
      <RecommendedArticlesSection />
      <RequestCoachingSection />
    </div>
  );
}
