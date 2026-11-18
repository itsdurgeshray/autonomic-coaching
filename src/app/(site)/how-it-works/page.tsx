import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/how-it-works/HeroSection';
import { TheProcessAtAGlanceSection } from '@/components/sections/how-it-works/TheProcessAtAGlanceSection';
import { ApplyingForCoachingSection } from '@/components/sections/how-it-works/ApplyingForCoachingSection';
import { TheFirstCallAndYourAssessmentSection } from '@/components/sections/how-it-works/TheFirstCallAndYourAssessmentSection';
import { WhatATypicalWeekLooksLikeSection } from '@/components/sections/how-it-works/WhatATypicalWeekLooksLikeSection';
import { HowLongCoachingLastsSection } from '@/components/sections/how-it-works/HowLongCoachingLastsSection';
import { WhatCoachingAsksOfYouSection } from '@/components/sections/how-it-works/WhatCoachingAsksOfYouSection';
import { WhoCoachingIsForSection } from '@/components/sections/how-it-works/WhoCoachingIsForSection';
import { FAQSection } from '@/components/sections/how-it-works/FAQSection';
import { RequestCTASection } from '@/components/sections/how-it-works/RequestCTASection';
import '@/styles/pages/how-it-works.css';

export const metadata: Metadata = buildMetadata({
  title: 'How It Works',
  description:
    'How private health coaching works with Justin Maguire: an application, an assessment, a personalised plan and weekly one-to-one coaching.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <div data-page="how-it-works" className="page-root">
      <HeroSection />
      <TheProcessAtAGlanceSection />
      <ApplyingForCoachingSection />
      <TheFirstCallAndYourAssessmentSection />
      <WhatATypicalWeekLooksLikeSection />
      <HowLongCoachingLastsSection />
      <WhatCoachingAsksOfYouSection />
      <WhoCoachingIsForSection />
      <FAQSection />
      <RequestCTASection />
    </div>
  );
}
