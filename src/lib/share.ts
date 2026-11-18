import { site } from '@/lib/site';

/** Share links for an article, built at render time so they work without JavaScript */
export function shareLinks(path: string, title: string) {
  const u = encodeURIComponent(`${site.url}${path}`);
  const t = encodeURIComponent(title);
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    x: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    whatsapp: `https://wa.me/?text=${t}%20${u}`,
    email: `mailto:?subject=${t}&body=${u}`,
  };
}
