import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  VideoPost,
  Title,
  ExternalLink,
  Header
} from '../components'

function VideoSection({ title, data }) {
  return (
    <section id="section-development-videos">
      <div className="container">
        <Grid>
          <ColSidebar>
            <Title>{title}</Title>
          </ColSidebar>

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
  data: {
    heroVideoData,
    developmentVideoData,
    designVideoData,
    conferenceVideoData
  }
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                cum dolore dolorum maxime mollitia necessitatibus officia
                praesentium rerum unde ut? Asperiores culpa cupiditate impedit
                nam obcaecati optio quidem ratione? Non!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                cum dolore dolorum maxime mollitia necessitatibus officia
                praesentium rerum unde ut? Asperiores culpa cupiditate impedit
                nam obcaecati optio quidem ratione? Non!
              </p>
              {heroVideoData.edges.length && (
                <VideoPost {...heroVideoData.edges[0].node.frontmatter} />
              )}
            </ColContent>

            <ColExtra>
              <ExternalLink
                urls={[
                  { name: 'YouTube', url: 'https://youtube.com/ademilter' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' },
                  { name: 'Twitter', url: 'https://twitter.com/ademilter' }
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
