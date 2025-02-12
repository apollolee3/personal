/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  trailingSlash: true, // Ensures correct paths
  images: {
    unoptimized: true, // Fixes missing images
  },
  assetPrefix: "", // Leave this empty since you're using a custom domain
};

module.exports = nextConfig;
