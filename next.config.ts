import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  /* Pin the project root: a package-lock.json higher up the disk otherwise widens the dev watcher, which rebuilds and reloads pages on unrelated file changes */
  turbopack: { root: path.join(__dirname) },
  outputFileTracingRoot: path.join(__dirname),
  /* The static design system reference keeps its old address */
  async rewrites() {
    return [
      { source: '/design-system', destination: '/design-system/index.html' },
      { source: '/design-system.html', destination: '/design-system/index.html' },
    ];
  },
  images: {
    /* Resized AVIF or WebP per screen; the hero portrait alone is a 1.5MB PNG at full size */
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
