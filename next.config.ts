import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/cv",
        destination: "/CV_Leo_Fernandez.pdf",
      },
      {
        source: "/CV_Leo_Fernandez.pdf", // Also allow /cv.pdf alias if we want
        destination: "/CV_Leo_Fernandez.pdf",
      }
    ];
  },
};

export default nextConfig;
