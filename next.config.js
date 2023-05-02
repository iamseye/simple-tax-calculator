/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/tax-calculator/:slug*',
        destination: 'http://0.0.0.0:5000/tax-calculator/:slug*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
};

module.exports = nextConfig;
