import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JustinMaguireSection } from '@/components/sections/about/JustinMaguireSection';
import { HowILookAtHealthSection } from '@/components/sections/about/HowILookAtHealthSection';
import { HowIWorkWithClientsSection } from '@/components/sections/about/HowIWorkWithClientsSection';
import { QualificationsAndTrainingSection } from '@/components/sections/about/QualificationsAndTrainingSection';
import { WhatOthersSayAboutMyWorkSection } from '@/components/sections/about/WhatOthersSayAboutMyWorkSection';
import { WhyIDoThisWorkSection } from '@/components/sections/about/WhyIDoThisWorkSection';
import { WhoIWorkWithSection } from '@/components/sections/about/WhoIWorkWithSection';
import { RequestCoachingWithMeSection } from '@/components/sections/about/RequestCoachingWithMeSection';
import '@/styles/pages/about.css';

export const metadata: Metadata = buildMetadata({
  title: 'About Justin Maguire',
  description:
    'Justin Maguire is a nutritional scientist and one-to-one health coach who reads lab results, daily tracking and psychology together.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div data-page="about" className="page-root">
      <JustinMaguireSection />
      <HowILookAtHealthSection />
      <HowIWorkWithClientsSection />
      <QualificationsAndTrainingSection />
      <WhatOthersSayAboutMyWorkSection />
      <WhyIDoThisWorkSection />
      <WhoIWorkWithSection />
      <RequestCoachingWithMeSection />
    </div>
  );
}
