const withPWA = require('next-pwa')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    env: {
      API_URL: isDev ? 'http://localhost:3000' : 'https://ademilter.com'
    },
    images: {
      domains: ['dl.airtable.com', 'images.unsplash.com']
    },
    pwa: {
      dest: 'public',
      disable: isDev
    },
    webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat'
        })
      }

      return config
    }
  }
}

module.exports = (phase) => withPWA(nextConfig(phase))
