import type { Metadata, Viewport } from 'next';
import { Newsreader } from 'next/font/google';
import localFont from 'next/font/local';
import { site } from '@/lib/site';
import '@/styles/globals.css';

const aeonik = localFont({
  src: [
    { path: '../fonts/Aeonik-Regular.woff2', weight: '400' },
    { path: '../fonts/Aeonik-Medium.woff2', weight: '500' },
    { path: '../fonts/Aeonik-Bold.woff2', weight: '700' },
  ],
  variable: '--font-aeonik',
  display: 'swap',
});

/* Only the article pull quote uses it, so it is not preloaded on every page */
const newsreader = Newsreader({
  subsets: ['latin'],
  style: 'italic',
  axes: ['opsz'],
  variable: '--font-newsreader',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
};

export const viewport: Viewport = { themeColor: '#022721', viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${aeonik.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
