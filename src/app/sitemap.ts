import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const PATHS = [
  '/',
  '/responsive-living',
  '/how-it-works',
  '/about',
  '/results',
  '/blog',
  '/blog/why-do-i-still-feel-tired',
  '/faq',
  '/contact',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
