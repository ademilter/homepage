module.exports = {
  head: {
    title: 'ademilter-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: {
    color: '#3B8070'
  },
  css: ['~/styles/main.scss'],
  build: {
    vendor: ['respimage', 'lazysizes']
  }
}
