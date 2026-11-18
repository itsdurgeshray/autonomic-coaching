import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { legal } from '@/content/legal';

export const metadata: Metadata = buildMetadata({
  title: legal.terms.title,
  description: legal.terms.description,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <section className="sec" aria-labelledby="terms-title">
      <div className="wrap">
        <div className="shead">
          <h1 id="terms-title">{legal.terms.title}</h1>
          <p className="body" style={{ marginTop: 24 }}>
            {legal.pending}
          </p>
        </div>
      </div>
    </section>
  );
}
