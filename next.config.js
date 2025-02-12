/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  trailingSlash: true, // Ensures correct paths
  images: {
    unoptimized: true, // Fixes missing images
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "", // Leave blank since repo matches domain
};

module.exports = nextConfig;
