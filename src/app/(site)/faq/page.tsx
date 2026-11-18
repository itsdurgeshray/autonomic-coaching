import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/faq/HeroSection';
import { QuestionsByTopicSection } from '@/components/sections/faq/QuestionsByTopicSection';
import { CTASection } from '@/components/sections/faq/CTASection';
import { FaqSearch } from '@/components/patterns/enhance/FaqSearch';
import '@/styles/pages/faq.css';

export const metadata: Metadata = buildMetadata({
  title: 'Understanding Autonomic Coaching',
  description:
    'What to expect, how the process works, whether coaching is the right approach for you, and how your information is handled.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <div data-page="faq" className="page-root">
      <HeroSection />
      <QuestionsByTopicSection />
      <CTASection />
      <FaqSearch />
    </div>
  );
}
