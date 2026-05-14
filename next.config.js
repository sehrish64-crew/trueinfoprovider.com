/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },

  webpack(config, { isServer }) {
    if (isServer) {
      config.output.chunkFilename = '[name]..js';
    }

    return config;
  },
};

module.exports = nextConfig;
