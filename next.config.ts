import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'substackcdn.com' },
      { protocol: 'https', hostname: 'www.challies.com' },
      { protocol: 'https', hostname: 'founders.org' },
      { protocol: 'https', hostname: 'd2bwo9zemjwxh5.cloudfront.net' },
      { protocol: 'https', hostname: 'mosaic.scdn.co' },
      { protocol: 'https', hostname: 'img.icons8.com' },
    ],
  },
};

export default nextConfig;
