/** @type {import('next').NextConfig} */

module.exports = nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    GH_TOKEN:"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"
  },
};
