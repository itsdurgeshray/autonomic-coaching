import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/responsive-living/HeroSection';
import { EndorsedBySection } from '@/components/sections/responsive-living/EndorsedBySection';
import { TheProblemSection } from '@/components/sections/responsive-living/TheProblemSection';
import { WhatIsResponsiveLivingSection } from '@/components/sections/responsive-living/WhatIsResponsiveLivingSection';
import { FranklSection } from '@/components/sections/responsive-living/FranklSection';
import { MeetJamesSection } from '@/components/sections/responsive-living/MeetJamesSection';
import { WhatYouLlUnderstandSection } from '@/components/sections/responsive-living/WhatYouLlUnderstandSection';
import { AboutTheAuthorSection } from '@/components/sections/responsive-living/AboutTheAuthorSection';
import { IsResponsiveLivingRightForYouSection } from '@/components/sections/responsive-living/IsResponsiveLivingRightForYouSection';
import { ReadTheFirstChapterFreeSection } from '@/components/sections/responsive-living/ReadTheFirstChapterFreeSection';
import { GetResponsiveLivingSection } from '@/components/sections/responsive-living/GetResponsiveLivingSection';
import { FAQsSection } from '@/components/sections/responsive-living/FAQsSection';
import { FinalCTASection } from '@/components/sections/responsive-living/FinalCTASection';
import '@/styles/pages/responsive-living.css';

export const metadata: Metadata = buildMetadata({
  title: 'Responsive Living, the book',
  description:
    'Responsive Living follows one man who learned to widen the space between stress and response, and explains the biology of what happens when it closes.',
  path: '/responsive-living',
});

export default function ResponsiveLivingPage() {
  return (
    <div data-page="responsive-living" className="page-root">
      <HeroSection />
      <EndorsedBySection />
      <TheProblemSection />
      <WhatIsResponsiveLivingSection />
      <FranklSection />
      <MeetJamesSection />
      <WhatYouLlUnderstandSection />
      <AboutTheAuthorSection />
      <IsResponsiveLivingRightForYouSection />
      <ReadTheFirstChapterFreeSection />
      <GetResponsiveLivingSection />
      <FAQsSection />
      <FinalCTASection />
    </div>
  );
}
