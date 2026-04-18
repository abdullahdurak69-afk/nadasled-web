import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // AWS Amplify / S3 için statik export
  trailingSlash: true,   // S3 uyumluluğu için
  images: {
    unoptimized: true,   // Statik export'ta next/image optimizasyonu kapalı
  },
};

export default nextConfig;
