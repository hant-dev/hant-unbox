import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // <-- THÊM DÒNG NÀY
  images: {
    unoptimized: true, // <-- THÊM DÒNG NÀY
  },
  trailingSlash: true, // <-- THÊM DÒNG NÀY
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;