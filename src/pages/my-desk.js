import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  ExternalList,
  DevicePost,
  Header,
  Html
} from '../components'

function DeviceSection({ title, data }) {
  return (
    <section id="section-development-videos">
      <div className="container">
        <Grid>
          <ColSidebar title={title} />
          <ColContent>
            <r-grid columns="1" columns-t="2" columns-d="3">
              {data.edges.map(({ node }) => {
                return (
                  <r-cell key={node.id} span-t="1">
                    <DevicePost {...node.frontmatter} />
                  </r-cell>
                )
              })}
            </r-grid>
          </ColContent>
        </Grid>
      </div>
    </section>
  )
}

function MyDeskPage({
  location,
  data: { heroData, homeData, everywhereData }
}) {
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
                <Img fluid={heroData.childImageSharp.fluid} />
              </Html>
            </ColContent>

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

      <DeviceSection title="Genel" data={everywhereData} />
      <DeviceSection title="Ev" data={homeData} />
    </Layout>
  )
}

export const query = graphql`
  {
    metaData: site {
      ...SiteMetaData
    }
    heroData: file(name: { eq: "my-desk" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/my-desk/" }
        frontmatter: { category: { eq: "home" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          ...DevicePost
        }
      }
    }
    everywhereData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/my-desk/" }
        frontmatter: { category: { eq: "everywhere" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          ...DevicePost
        }
      }
    }
  }
`

export default MyDeskPage
