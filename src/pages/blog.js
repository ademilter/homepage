import React from 'react'
import groupBy from 'lodash.groupby'
import { graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  BlogPost,
  ExternalList,
  Header,
  Html
} from '../components'

function BlogPage({ location, data: { metaData, blogPostData } }) {
  const { medium, twitter } = metaData.siteMetadata.socialLinks

  const postGroupByYear = groupBy(blogPostData.edges, ({ node }) => {
    return new Date(node.frontmatter.date).getFullYear()
  })

  return (
    <Layout>
      <SEO title="Yazılar" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>

            <ColContent>
              <Html>
                <p>Medium üzerinden yayınladığım blog yazıları</p>
              </Html>
            </ColContent>

            <ColExtra>
              <ExternalList urls={[medium, twitter]} />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* SECTION YEAR */}
      {Object.keys(postGroupByYear)
        .reverse()
        .map(year => (
          <section key={year}>
            <div className="container">
              <Grid>
                <ColSidebar title={year} />
                <ColContent>
                  {postGroupByYear[year].map(({ node }) => (
                    <BlogPost key={node.id} {...node.frontmatter} />
                  ))}
                </ColContent>
              </Grid>
            </div>
          </section>
        ))}
    </Layout>
  )
}

export const query = graphql`
  {
    metaData: site {
      ...SiteMetaData
    }
    blogPostData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/data/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`

export default BlogPage
