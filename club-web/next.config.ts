import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pzjzidhvfhascpruwrrk.supabase.co",
      },
    ],
  },
};

export default nextConfig;