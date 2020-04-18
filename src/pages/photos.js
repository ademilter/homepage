import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <r-grid columns="2">
      {data.edges.map(({ node }, i) => {
        return (
          <r-cell key={node.id} span={i === 0 ? 2 : 1}>
            <Link url={node.frontmatter.url}>
              <Photo img={node.frontmatter.src.childImageSharp.fluid}>
                <Meta
                  title={node.frontmatter.title}
                  desc1={node.frontmatter.desc}
                />
              </Photo>
            </Link>
          </r-cell>
        )
      })}
    </r-grid>
  )
}

function IndexPage({ location }) {
  const {
    heroPhotoData,
    lastPhotoData,
    journalPhotoData
  } = useStaticQuery(graphql`
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
              extra
              src {
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
              extra
              src {
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
              extra
              url
              src {
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
  `)

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
                    img={
                      heroPhotoData.edges[0].node.frontmatter.src
                        .childImageSharp.fluid
                    }
                  >
                    <Meta
                      title={heroPhotoData.edges[0].node.frontmatter.title}
                      desc1={heroPhotoData.edges[0].node.frontmatter.desc}
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

export default IndexPage
