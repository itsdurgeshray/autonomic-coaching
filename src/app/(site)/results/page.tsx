import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { WhatClientsSaySection } from '@/components/sections/results/WhatClientsSaySection';
import { HearItFromClientsSection } from '@/components/sections/results/HearItFromClientsSection';
import { InTheirOwnWordsSection } from '@/components/sections/results/InTheirOwnWordsSection';
import { WhatColleaguesAndPractitionersSaySection } from '@/components/sections/results/WhatColleaguesAndPractitionersSaySection';
import { RequestCTASection } from '@/components/sections/results/RequestCTASection';
import '@/styles/pages/results.css';

export const metadata: Metadata = buildMetadata({
  title: 'Client Results',
  description:
    'What clients say about working with Justin Maguire: what changed and what coaching was like, in their own words.',
  path: '/results',
});

export default function ResultsPage() {
  return (
    <div data-page="results" className="page-root">
      <WhatClientsSaySection />
      <HearItFromClientsSection />
      <InTheirOwnWordsSection />
      <WhatColleaguesAndPractitionersSaySection />
      <RequestCTASection />
    </div>
  );
}
