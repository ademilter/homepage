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

function VideoGrid({ data }) {
  return (
    <r-grid columns="1" columns-t="2">
      {data.edges.map(({ node }, i) => {
        return (
          <r-cell key={node.id} span-t="1">
            <Link url={node.frontmatter.url}>
              <Photo img={node.frontmatter.photo.childImageSharp.fluid}>
                <Meta
                  title={node.frontmatter.title}
                  desc1={`${node.frontmatter.totalVideo} video • ${node.frontmatter.totalDuration} dakika`}
                />
              </Photo>
            </Link>
          </r-cell>
        )
      })}
    </r-grid>
  )
}

function VideosPage({ location }) {
  const {
    heroVideoData,
    developmentVideoData,
    designVideoData
  } = useStaticQuery(graphql`
    {
      heroVideoData: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/data/videos/" }
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
              totalVideo
              totalDuration
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
      developmentVideoData: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/data/videos/" }
          frontmatter: { category: { eq: "development" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              desc
              totalVideo
              totalDuration
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
      designVideoData: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/data/videos/" }
          frontmatter: { category: { eq: "design" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              desc
              totalVideo
              totalDuration
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
  `)

  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <section id="section-hero-video">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>

            <ColContent>
              {heroVideoData.edges.length && (
                <Link url={heroVideoData.edges[0].node.frontmatter.url}>
                  <Photo
                    img={
                      heroVideoData.edges[0].node.frontmatter.photo
                        .childImageSharp.fluid
                    }
                  >
                    <Meta
                      title={heroVideoData.edges[0].node.frontmatter.title}
                      desc1={heroVideoData.edges[0].node.frontmatter.desc}
                      desc2={heroVideoData.edges[0].node.frontmatter.extra}
                    />
                  </Photo>
                </Link>
              )}
            </ColContent>

            <ColExtra>
              <ExternalLink
                urls={[
                  { name: 'YouTube', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* DEVELOPMENT VIDEOS */}
      <section id="section-development-videos">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Title>Yazılım Eğitimleri</Title>
            </ColSidebar>

            <ColContent>
              <VideoGrid data={developmentVideoData} />
            </ColContent>
          </Grid>
        </div>
      </section>

      {/* DESIGN VIDEOS */}
      <section id="section-design-videos">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Title>Tasarım Eğitimleri</Title>
            </ColSidebar>

            <ColContent>
              <VideoGrid data={designVideoData} />
            </ColContent>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default VideosPage
