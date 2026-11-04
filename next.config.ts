import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.246"],
  images: {
    // 90 is used by the full-width page banners, where the default 75 visibly softens the photo
    qualities: [75, 90],
  },
};

export default nextConfig;
