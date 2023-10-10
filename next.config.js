/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
