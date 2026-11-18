import type { Metadata } from 'next';
import { site } from '@/lib/site';

export type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  /** Account and assessment screens stay out of search results */
  isPrivate?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = '/images/justin-maguire-arms-crossed.png',
  type = 'website',
  isPrivate = false,
}: BuildMetadataInput): Metadata {
  const fullTitle = path === '/' ? title : `${title} · ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [image],
    },
    robots: isPrivate ? { index: false, follow: false } : undefined,
  };
}

/** Serialises JSON-LD safely for a script tag */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
