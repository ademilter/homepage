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
  Title,
  ExternalList,
  Header,
  Html
} from '../components'

function BlogPage({ location, data: { blogPostData } }) {
  // const lastPost = blogPostData.edges[0].node
  // const otherPost = blogPostData.edges.splice(1)
  const postGroupByYear = groupBy(blogPostData.edges, ({ node }) => {
    return new Date(node.frontmatter.date).getFullYear()
  })

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

            <ColContent>
              <Html>
                <p>Medium üzerinden yayınladığım blog yazıları</p>
              </Html>
            </ColContent>

            <ColExtra>
              <ExternalList
                urls={[
                  { name: 'Medium', url: 'https://medium.com/@ademilter' },
                  { name: 'Twitter', url: 'https://twitter.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* SECTION YEAR */}
      {Object.keys(postGroupByYear)
        .reverse()
        .map(year => (
          <section key={year} id="section-last-photo">
            <div className="container">
              <Grid>
                <ColSidebar>
                  <Title>{year}</Title>
                </ColSidebar>

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
