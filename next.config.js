const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "dl.airtable.com",
      "v5.airtableusercontent.com",
    ],
  },
  staticPageGenerationTimeout: 10,
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
