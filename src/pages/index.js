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
  ColSidebar
} from '../components'

function IndexPage() {
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/data/photos/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(edges)

  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <div className="container">
        <Grid>
          <ColContent>
            <r-grid>
              <r-cell span="6">
                <Img fluid={edges[0].node.childImageSharp.fluid} />
              </r-cell>
            </r-grid>
          </ColContent>
          <ColExtra>dasdas</ColExtra>
        </Grid>
      </div>

      {/* LAST PHOTOS */}
      <div className="container">
        <Grid>
          <ColSidebar>
            <h4>Hello</h4>
          </ColSidebar>
          <ColContent>
            <r-grid columns="8">
              {/* row */}
              <r-cell span="4">
                <Img fluid={edges[0].node.childImageSharp.fluid} />
              </r-cell>
              <r-cell span="4">
                <Img fluid={edges[0].node.childImageSharp.fluid} />
              </r-cell>
              {/* row */}
              <r-cell span="2">
                <Img fluid={edges[0].node.childImageSharp.fluid} />
              </r-cell>
              <r-cell span="2">
                <Img fluid={edges[0].node.childImageSharp.fluid} />
              </r-cell>
              <r-cell span="2">
                <Img fluid={edges[0].node.childImageSharp.fluid} />
              </r-cell>
              <r-cell span="2">
                <Img fluid={edges[0].node.childImageSharp.fluid} />
              </r-cell>
            </r-grid>
          </ColContent>
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
