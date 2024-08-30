const { withContentCollections } = require("@content-collections/next");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
      },
    ],
  },
};

module.exports = withContentCollections(nextConfig);
