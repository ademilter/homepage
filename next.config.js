const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "dl.airtable.com"],
  },
  experimental: {
    appDir: false,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
});
