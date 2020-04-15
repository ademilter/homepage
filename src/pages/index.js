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
    hero,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    journal1,
    journal2,
    journal3,
    journal4
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
      journal1: file(name: { eq: "vsco5cab706b288bd" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      journal2: file(name: { eq: "vsco59be57b1423b3" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      journal3: file(name: { eq: "vsco5c23cc2e48d32" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      journal4: file(name: { eq: "vsco5c9a2136b0ed8" }) {
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
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColContent>
              <r-grid>
                <r-cell span="6">
                  <Photo
                    img={hero.childImageSharp.fluid}
                    title="Amcam, Toprak ve Fırat"
                    description="Keban, Elazığ"
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
                {/* row */}
                <r-cell span="2" span-l="4">
                  <Photo
                    img={photo1.childImageSharp.fluid}
                    title="15 Temmuz Şehitler Cami"
                    description="Üsküdar, İstanbul"
                  />
                </r-cell>
                <r-cell span="2" span-l="4">
                  <Photo
                    img={photo2.childImageSharp.fluid}
                    title="Eminönü meydan"
                    description="Süleymaniye, istanbul"
                  />
                </r-cell>

                {/* row */}
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo3.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo4.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo5.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={photo6.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
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
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={journal1.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={journal2.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={journal3.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
                <r-cell span="1" span-l="2">
                  <Photo
                    aspectRatio="1-1"
                    img={journal4.childImageSharp.fluid}
                    title="deneme"
                    description="deneme"
                  />
                </r-cell>
              </r-grid>
            </ColContent>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
