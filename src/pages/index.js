import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import { Link } from 'gatsby'

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
    hero,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    journal1
  } = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "vsco_062215" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo1: file(name: { eq: "vsco5dd7f46bab373" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo2: file(name: { eq: "vsco5cd19e5e66489" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo3: file(name: { eq: "vsco5cf7886b63fd2" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo4: file(name: { eq: "vsco5e10dc39b372d" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo5: file(name: { eq: "vsco5c3a1c9eee934" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo6: file(name: { eq: "vsco5cae4c8ab999e" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      journal1: file(name: { eq: "vsco5c9a2136b0ed8" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <div id="section-hero">
        <div className="container">
          <Grid>
            <ColContent>
              <r-grid>
                <r-cell span="6">
                  <Photo
                    img={hero.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
              </r-grid>
            </ColContent>
            <ColExtra>dasdas</ColExtra>
          </Grid>
        </div>
      </div>

      {/* LAST PHOTOS */}
      <div id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar>
              <h4>Hello</h4>
            </ColSidebar>
            <ColContent>
              <r-grid columns="8">
                {/* row */}
                <r-cell span="4">
                  <Photo
                    img={photo1.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="4">
                  <Photo
                    img={photo2.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                {/* row */}
                <r-cell span="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo3.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo4.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo5.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo6.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                )}
              </r-grid>
            </ColContent>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
