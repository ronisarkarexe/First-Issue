import withPWA from "next-pwa";
/** @type {import('next').NextConfig} */

const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
};

const nextConfig = withPWA(pwaConfig);

export default nextConfig = {
  output: "export",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
