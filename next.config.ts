import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/research-tasks",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
