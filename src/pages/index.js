import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  Photo
} from '../components'

function IndexPage() {
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
              fluid(maxWidth: 800) {
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
                  fluid(maxWidth: 800) {
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
                  fluid(maxWidth: 800) {
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
                  fluid(maxWidth: 800) {
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

  console.log(lastPhotos1)

  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColContent>
              <r-grid>
                <r-cell span="6">
                  <Photo
                    img={heroPhoto.frontmatter.src.childImageSharp.fluid}
                    title={heroPhoto.frontmatter.title}
                    desc1={heroPhoto.frontmatter.desc}
                  />
                </r-cell>
              </r-grid>
            </ColContent>
            <ColExtra>dasdas</ColExtra>
          </Grid>
        </div>
      </section>

      {/* LAST PHOTOS */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar>
              <h2>Son Fotoğraflar</h2>
            </ColSidebar>
            <ColContent>
              <r-grid columns="2" columns-l="8">
                {lastPhotos1.edges.map(({ node }) => {
                  return (
                    <r-cell key={node.id} span="2" span-l="4">
                      <Photo
                        img={node.frontmatter.src.childImageSharp.fluid}
                        title={node.frontmatter.title}
                        desc1={node.frontmatter.desc}
                      />
                    </r-cell>
                  )
                })}
                {lastPhotos2.edges.map(({ node }) => {
                  return (
                    <r-cell key={node.id} span="1" span-l="2">
                      <Photo
                        aspectRatio="1-1"
                        img={node.frontmatter.src.childImageSharp.fluid}
                        title={node.frontmatter.title}
                        desc1={node.frontmatter.desc}
                      />
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
              <r-grid columns="2" columns-l="8">
                {journalPhotos.edges.map(({ node }) => {
                  return (
                    <r-cell key={node.id} span="1" span-l="2">
                      <Photo
                        aspectRatio="1-1"
                        img={node.frontmatter.src.childImageSharp.fluid}
                        title={node.frontmatter.title}
                        desc1={node.frontmatter.desc}
                      />
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
