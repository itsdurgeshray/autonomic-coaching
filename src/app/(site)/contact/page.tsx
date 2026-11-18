import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/contact/HeroSection';
import { IsThisAboutMeSection } from '@/components/sections/contact/IsThisAboutMeSection';
import { WhatHappensNextSection } from '@/components/sections/contact/WhatHappensNextSection';
import { TheCoachingCommitmentSection } from '@/components/sections/contact/TheCoachingCommitmentSection';
import { PreferToWriteDirectlySection } from '@/components/sections/contact/PreferToWriteDirectlySection';
import '@/styles/pages/contact.css';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Scientist-led, one-to-one health coaching begins with understanding your situation. Send a request or write to the team directly.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div data-page="contact" className="page-root">
      <HeroSection />
      <IsThisAboutMeSection />
      <WhatHappensNextSection />
      <TheCoachingCommitmentSection />
      <PreferToWriteDirectlySection />
    </div>
  );
}
