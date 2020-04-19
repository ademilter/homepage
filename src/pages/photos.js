import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  Photo,
  Meta,
  Link,
  Title,
  ExternalLink,
  Header
} from '../components'

function PhotoGrid({ data }) {
  return (
    <r-grid columns="1" columns-t="2" columns-d="3">
      {data.edges.map(({ node }, i) => {
        return (
          <r-cell key={node.id} span-t="1">
            <Link url={node.frontmatter.url}>
              <Photo
                aspectRatio="4-3"
                img={node.frontmatter.photo.childImageSharp.fluid}
              >
                <Meta
                  title={node.frontmatter.title}
                  desc1={node.frontmatter.location}
                  desc2={node.frontmatter.device}
                />
              </Photo>
            </Link>
          </r-cell>
        )
      })}
    </r-grid>
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
                <Link url={heroPhotoData.edges[0].node.frontmatter.url}>
                  <Photo
                    aspectRatio="4-3"
                    img={
                      heroPhotoData.edges[0].node.frontmatter.photo
                        .childImageSharp.fluid
                    }
                  >
                    <Meta
                      title={heroPhotoData.edges[0].node.frontmatter.title}
                      desc1={heroPhotoData.edges[0].node.frontmatter.desc}
                      desc2={heroPhotoData.edges[0].node.frontmatter.location}
                      desc3={heroPhotoData.edges[0].node.frontmatter.device}
                    />
                  </Photo>
                </Link>
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

      {/* LAST PHOTOS */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Title>Son Fotoğraflar</Title>
            </ColSidebar>

            <ColContent>
              <PhotoGrid data={lastPhotoData} />
            </ColContent>
          </Grid>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Title>Dergiler</Title>
            </ColSidebar>

            <ColContent>
              <PhotoGrid data={journalPhotoData} />
            </ColContent>
          </Grid>
        </div>
      </section>
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
