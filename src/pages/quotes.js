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

function QuotesPage({ location, data: { metaData, quotesData } }) {
  const { vsco, instagram, twitter } = metaData.siteMetadata.socialLinks

  return (
    <Layout>
      <SEO title="Alıntılar" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>
            <ColContent>
              Okuduğum kitaplarda ve digital platformlarda görüp hoşuma giden
              alıntılar.
            </ColContent>

            <ColExtra>
              <ExternalList urls={[vsco, instagram, twitter]} />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* - */}
      <section>
        <div className="container">
          <Grid>
            <ColContent>
              {quotesData.edges.map(({ node }) => {
                return <QuotePost key={node.id} {...node.frontmatter} />
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
    metaData: site {
      ...SiteMetaData
    }
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
