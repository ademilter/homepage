import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  Title,
  ExternalLink,
  PhotoPost,
  Header
} from '../components'

function PhotoSection({ title, data }) {
  return (
    <section id="section-last-photo">
      <div className="container">
        <Grid>
          <ColSidebar>
            <Title>{title}</Title>
          </ColSidebar>

          <ColContent>
            <r-grid columns="1" columns-t="2" columns-d="3">
              {data.map(({ node }) => {
                return (
                  <r-cell key={node.id} span-t="1">
                    <PhotoPost aspectRatio="4-3" {...node.frontmatter} />
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

function PhotosPage({
  location,
  data: { heroPhotoData, lastPhotoData, journalPhotoData }
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
              {heroPhotoData.edges.length && (
                <PhotoPost
                  aspectRatio="4-3"
                  {...heroPhotoData.edges[0].node.frontmatter}
                />
              )}
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

      <PhotoSection title="Fotoğraflar" data={lastPhotoData.edges} />
      <PhotoSection title="Dergiler" data={journalPhotoData.edges} />
    </Layout>
  )
}

export const query = graphql`
  {
    heroPhotoData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/photos/" }
        frontmatter: { category: { eq: "hero" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            location
            device
            url
            date
            category
            photo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    lastPhotoData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/photos/" }
        frontmatter: { category: { eq: "last" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            location
            device
            url
            date
            category
            photo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    journalPhotoData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/photos/" }
        frontmatter: { category: { eq: "journal" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            location
            device
            url
            date
            category
            photo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PhotosPage
