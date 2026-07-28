import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers has no built-in Next image optimizer; serve originals.
    unoptimized: true,
  },
};

export default nextConfig;
