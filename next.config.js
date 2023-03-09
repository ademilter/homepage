const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */

module.exports = withContentlayer({
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
});
