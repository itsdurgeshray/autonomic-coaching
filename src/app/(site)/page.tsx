import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { TrustBarSection } from '@/components/sections/home/TrustBarSection';
import { MeetJustinSection } from '@/components/sections/home/MeetJustinSection';
import { TheProblemSection } from '@/components/sections/home/TheProblemSection';
import { PrecisionCoachingSection } from '@/components/sections/home/PrecisionCoachingSection';
import { ResponsiveLivingSection } from '@/components/sections/home/ResponsiveLivingSection';
import { HowCoachingWorksSection } from '@/components/sections/home/HowCoachingWorksSection';
import { ResultsSection } from '@/components/sections/home/ResultsSection';
import { IsThisForYouSection } from '@/components/sections/home/IsThisForYouSection';
import { FAQSection } from '@/components/sections/home/FAQSection';
import { FinalCallToActionSection } from '@/components/sections/home/FinalCallToActionSection';
import '@/styles/pages/home.css';

export const metadata: Metadata = buildMetadata({
  title: 'Autonomic Coaching: one-to-one health coaching with Justin Maguire',
  description:
    'Personalised coaching guided by your biology, not guesswork. One-to-one autonomic coaching with Justin Maguire for people who have tried everything else.',
  path: '/',
});

export default function HomePage() {
  return (
    <div data-page="home" className="page-root">
      <HeroSection />
      <TrustBarSection />
      <MeetJustinSection />
      <TheProblemSection />
      <PrecisionCoachingSection />
      <ResponsiveLivingSection />
      <HowCoachingWorksSection />
      <ResultsSection />
      <IsThisForYouSection />
      <FAQSection />
      <FinalCallToActionSection />
    </div>
  );
}
