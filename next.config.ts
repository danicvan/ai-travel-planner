import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;