import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Kosutnik",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
