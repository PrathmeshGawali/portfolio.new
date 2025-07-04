/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site generation
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
  experimental: {
    serverComponentsExternalPackages: ['stream'], // Fixes stream error
  },
};

module.exports = nextConfig;