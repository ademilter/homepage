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
    legacyBrowsers: false,
    browsersListForSwc: true,
    nextScriptWorkers: true,
  },
});
