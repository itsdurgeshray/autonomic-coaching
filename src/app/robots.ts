import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === 'production' || process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';
  if (!isProduction) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/account', '/onboarding', '/assessment', '/login'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
