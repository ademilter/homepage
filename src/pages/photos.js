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
  ExternalList,
  PhotoPost,
  Header
} from '../components'

function PhotoSection({ title, data, children }) {
  return (
    <section id="section-last-photo">
      <div className="container">
        <Grid>
          {title && (
            <ColSidebar>
              <Title>{title}</Title>
            </ColSidebar>
          )}

          <ColContent>
            {children}

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
              <ExternalList
                urls={[
                  { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      <PhotoSection title="Güncel" data={lastPhotoData.edges}>
        {/*<Html>*/}
        {/*<p>*/}
        {/*  Fotoğraf, konuşmadan anlatmaktır. Herkesin baktığı yere kendi gözünden*/}
        {/*  göstermektir. Başkası için normal olanı keşfetmektir. Fotoğraf yaşamak*/}
        {/*  gibidir.*/}
        {/*</p>*/}
        {/*</Html>*/}
      </PhotoSection>
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
          ...PhotoPost
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
          ...PhotoPost
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
          ...PhotoPost
        }
      }
    }
  }
`

export default PhotosPage
