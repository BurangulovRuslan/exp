import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/exp' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/exp/' : '',
};

export default nextConfig;
