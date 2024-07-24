/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [require('path').join(__dirname, '*')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

module.exports = nextConfig;
