import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    // 90 is used by the full-width page banners, where the default 75 visibly softens the photo
    qualities: [75, 90],
  },
};

export default nextConfig;
