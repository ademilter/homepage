module.exports = {
  siteMetadata: {
    title: 'Adem ilter',
    description: 'test',
    author: '@ademilter'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'adem ilter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 100
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ]
}
