require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Adem ilter',
    slogan: 'Design and Code',
    description: 'Frontend Developer from Istanbul',
    username: '@ademilter',
    url: 'https://ademilter.com',
    socialLinks: {
      vsco: { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
      instagram: { name: 'Instagram', url: 'https://instagram.com/ademilter' },
      twitter: { name: 'Twitter', url: 'https://twitter.com/ademilter' },
      medium: { name: 'Medium', url: 'https://medium.com/@ademilter' },
      github: { name: 'Github', url: 'https://github.com/ademilter' },
      youtube: { name: 'YouTube', url: 'https://youtube.com/ademilter' },
      feyz: { name: 'Feyz', url: 'https://t.me/feyzli' }
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adem ilter',
        short_name: 'Ai',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-17768654-1'
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: `
          {
            repository(owner: "ademilter", name: "ama") {
              issues(first: 99, filterBy: {labels: ["website-connect"]}) {
                edges {
                  node {
                    id
                    createdAt
                    url
                    title
                    bodyHTML
                    comments(first: 99) {
                      edges {
                        node {
                          id
                          bodyHTML
                          author {
                            login
                          }
                        }
                      }
                    }
                    labels(first: 99) {
                      edges {
                        node {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'photos',
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
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 100
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-offline'
  ]
}
