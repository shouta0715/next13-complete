/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/img/ecommerce-images/**",
      },
    ],
  },
};

module.exports = nextConfig;
