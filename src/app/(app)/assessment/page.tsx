import type { Metadata } from 'next';
import { RequireSession } from '@/components/account/RequireSession';
import { AssessmentGate } from '@/components/assessment/AssessmentGate';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import '@/styles/assessment.css';

export const metadata: Metadata = buildMetadata({
  title: 'Health assessment',
  description:
    'Your health assessment in nine short sections, one question at a time. Pause any time; your answers are saved.',
  path: '/assessment',
  isPrivate: true,
});

export default function AssessmentPage() {
  return (
    <RequireSession>
      <AssessmentGate brand={site.name} />
    </RequireSession>
  );
}
