import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  QuotePost,
  ExternalList,
  Header
} from '../components'

function QuotesPage({ location, data: { quotesData } }) {
  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>
            <ColContent>-</ColContent>

            <ColExtra>
              <ExternalList
                urls={[
                  { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' },
                  { name: 'Twitter', url: 'https://twitter.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* - */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColContent>
              {quotesData.edges.map(({ node }) => {
                return <QuotePost {...node.frontmatter} />
              })}
            </ColContent>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    quotesData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/data/quotes/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          ...QuotePost
        }
      }
    }
  }
`

export default QuotesPage
