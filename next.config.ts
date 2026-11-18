import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  /* The static design system reference keeps its old address */
  async rewrites() {
    return [
      { source: '/design-system', destination: '/design-system/index.html' },
      { source: '/design-system.html', destination: '/design-system/index.html' },
    ];
  },
  images: {
    /* Serve images exactly as the static site did (Unsplash already sizes them by URL) */
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
