import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/**"),
      new URL("https://img.heroui.chat/image/avatar?w=100&h=100&u=2"),
    ],
  },
};

export default nextConfig;
