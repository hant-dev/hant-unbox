import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // <-- PHẢI CÓ DÒNG NÀY
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;