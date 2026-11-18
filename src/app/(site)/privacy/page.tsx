import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { legal } from '@/content/legal';

export const metadata: Metadata = buildMetadata({
  title: legal.privacy.title,
  description: legal.privacy.description,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <section className="sec" aria-labelledby="privacy-title">
      <div className="wrap">
        <div className="shead">
          <h1 id="privacy-title">{legal.privacy.title}</h1>
          <p className="body" style={{ marginTop: 24 }}>
            {legal.privacy.body}
          </p>
          <p className="body" style={{ marginTop: 16 }}>
            {legal.pending}
          </p>
        </div>
      </div>
    </section>
  );
}
