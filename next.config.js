const withPWA = require('next-pwa')

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  env: {
    API_URL: isDev ? 'http://localhost:3000' : 'https://ademilter.com'
  },
  images: {
    domains: ['dl.airtable.com']
  },
  pwa: {
    dest: 'public',
    disable: isDev
  }
}

module.exports = withPWA(nextConfig)
