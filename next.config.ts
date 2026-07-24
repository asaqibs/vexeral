import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost:3000", "http://localhost:3000", "https://localhost:3000"],
};

export default nextConfig;
// trigger redeploy
