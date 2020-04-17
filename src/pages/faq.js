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
  ExternalLink, Header
} from '../components'

function IndexPage({ location }) {
  const {
    heroPhoto,
    lastPhotos1,
    lastPhotos2,
    journalPhotos
  } = useStaticQuery(graphql`
    {
      heroPhoto: markdownRemark(fileAbsolutePath: { regex: "/photos/hero/" }) {
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
      lastPhotos1: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/photos/last-16-9/" } }
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
      lastPhotos2: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/photos/last-1-1/" } }
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
      journalPhotos: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/photos/journal/" } }
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
              <Link>
                <Photo img={heroPhoto.frontmatter.src.childImageSharp.fluid}>
                  <Meta
                    title={heroPhoto.frontmatter.title}
                    desc1={heroPhoto.frontmatter.desc}
                    desc2={heroPhoto.frontmatter.extra}
                  />
                </Photo>
              </Link>
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
              <r-grid columns="2" columns-t="4" columns-d="8">
                {lastPhotos1.edges.map(({ node }) => {
                  return (
                    <r-cell key={node.id} span="2" span-t="2" span-d="4">
                      <Link>
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
                {lastPhotos2.edges.map(({ node }) => {
                  return (
                    <r-cell key={node.id} span="1" span-t="1" span-d="2">
                      <Link>
                        <Photo
                          aspectRatio="1-1"
                          img={node.frontmatter.src.childImageSharp.fluid}
                        >
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
            </ColContent>
          </Grid>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar>
              <h2>Dergiler</h2>
            </ColSidebar>

            <ColContent>
              <r-grid columns="2" columns-t="4" columns-d="8">
                {journalPhotos.edges.map(({ node }) => {
                  return (
                    <r-cell key={node.id} span="1" span-t="1" span-d="2">
                      <Link>
                        <Photo
                          aspectRatio="1-1"
                          img={node.frontmatter.src.childImageSharp.fluid}
                        >
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
            </ColContent>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
