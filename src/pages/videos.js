import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  Html,
  VideoPost,
  ExternalList,
  Header
} from '../components'

function VideoSection({ title, data }) {
  return (
    <section id="section-development-videos">
      <div className="container">
        <Grid>
          <ColSidebar title={title} />
          <ColContent>
            <r-grid columns="1" columns-t="2" columns-d="3">
              {data.edges.map(({ node }, i) => {
                return (
                  <r-cell key={node.id} span-t="1">
                    <VideoPost {...node.frontmatter} />
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

function VideosPage({
  location,
  data: { developmentVideoData, designVideoData, conferenceVideoData }
}) {
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
              <Html>
                <p>
                  <b>Yazılım</b>, <b>tasarım</b> ve <b>tecrübelerimi</b>{' '}
                  paylaştığım video eğitimlere ücretsiz olarak erişebilirsiniz.
                </p>
                <p>
                  Amacım, yeni başlayan arkadaşlara yön göstermek, geçtiğim
                  zorlu süreçlerden edindiğim tecrübeleri aktarmak ve işini
                  kaliteli yapan insanların yetişmesine katkı sağlamak.
                </p>
              </Html>

              {/*{heroVideoData.edges.length && (*/}
              {/*  <VideoPost {...heroVideoData.edges[0].node.frontmatter} />*/}
              {/*)}*/}
            </ColContent>

            <ColExtra>
              <ExternalList
                urls={[
                  { name: 'Github', url: 'https://github.com/ademilter' },
                  { name: 'Twitter', url: 'https://twitter.com/ademilter' },
                  { name: 'Medium', url: 'https://medium.com/@ademilter' },
                  { name: 'YouTube', url: 'https://youtube.com/ademilter' },
                  { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      <VideoSection title="Yazılım" data={developmentVideoData} />
      <VideoSection title="Tasarım" data={designVideoData} />
      <VideoSection
        title="Katıldığım Konferanslar"
        data={conferenceVideoData}
      />
    </Layout>
  )
}

export const query = graphql`
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
          ...VideoPost
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
          ...VideoPost
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
          ...VideoPost
        }
      }
    }
    conferenceVideoData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/videos/" }
        frontmatter: { category: { eq: "conference" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          ...VideoPost
        }
      }
    }
  }
`

export default VideosPage
