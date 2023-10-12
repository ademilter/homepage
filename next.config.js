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
};

module.exports = withContentlayer(nextConfig);
