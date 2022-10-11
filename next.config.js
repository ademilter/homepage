const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import("next").NextConfig}
 */

module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "dl.airtable.com"],
  },
  rewrites() {
    return Promise.resolve([
      {
        source: '/bookmarks/rss.:format(xml|json)',
        destination: '/api/bookmarks-rss',
      },
    ]);
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    nextScriptWorkers: true,
  },
});
