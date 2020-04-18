require('dotenv').config()

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
