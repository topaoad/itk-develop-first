/** @type {import('next').NextConfig} */
module.exports = nextConfig = {
  env: {
    GH_TOKEN: process.env.GH_TOKEN,

  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
