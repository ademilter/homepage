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
  ExternalLink,
  Header
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos dolores impedit incidunt labore nemo nihil nisi odit
                possimus quod, rem! Aliquid, asperiores, excepturi? Illum
                impedit inventore numquam quibusdam sunt, unde?
              </p>
            </ColContent>

            <ColExtra>
              <ExternalLink
                urls={[
                  { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' }
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
                  {postGroupByYear[year].reverse().map(({ node }) => (
                    <BlogPost key={node.id} {...node} />
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
          id
          frontmatter {
            title
            desc
            url
            date
          }
        }
      }
    }
  }
`

export default BlogPage
