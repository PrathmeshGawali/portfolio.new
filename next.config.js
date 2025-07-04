const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['img.youtube.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['resend', 'stream'],
  },
  webpack: (config) => {
    // Add this to fix module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
};

module.exports = nextConfig;