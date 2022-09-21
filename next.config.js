/** @type {import('next').NextConfig} */

module.exports = nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
}