import type { LinkItem } from '@/types/content';

export const primaryNav: LinkItem[] = [
  { label: 'Responsive Living', href: '/responsive-living' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Justin', href: '/about' },
  { label: 'Results', href: '/results' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export const mobileNav: LinkItem[] = [...primaryNav, { label: 'Contact', href: '/contact' }];

/* Footer links, exactly as listed in the client document */
export const footerNav: LinkItem[] = [
  { label: 'Responsive Living', href: '/responsive-living' },
  { label: 'Results', href: '/results' },
  { label: 'About Justin', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export const socialNav: (LinkItem & {
  icon: 'i-instagram-logo' | 'i-youtube-logo' | 'i-facebook-logo';
})[] = [
  { label: 'Instagram', href: '#', icon: 'i-instagram-logo' },
  { label: 'YouTube', href: '#', icon: 'i-youtube-logo' },
  { label: 'Facebook', href: '#', icon: 'i-facebook-logo' },
];

export const footerNote = 'Coaching is not a substitute for medical diagnosis or treatment.';
export const requestCta = 'Request Coaching';

/* Extra small print shown in the footer of specific pages, as the document asks */
export const pageNotes: Record<string, string> = {
  '/results':
    'Disclaimer: Testimonials reflect individual experiences and aren’t a guarantee of results.',
};
