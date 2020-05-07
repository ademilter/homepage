import React from 'react'
import { graphql } from 'gatsby'
import groupBy from 'lodash.groupby'
import moment from 'moment'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  ExternalList,
  Header,
  LinkPost,
  Html
} from '../components'

moment.locale('tr')

function LinksPage({ location, data: { metaData, linksData } }) {
  const { twitter, feyz } = metaData.siteMetadata.socialLinks

  const lastWeekData = linksData.edges.filter(({ node }) => {
    return moment
      .utc(node.frontmatter.date)
      .isBetween(moment.utc().subtract(1, 'weeks'), moment.utc(), null, '[]')
  })

  const linkGroupByDay = groupBy(lastWeekData, ({ node }) => {
    return moment.utc(node.frontmatter.date).format('DD MMMM YYYY')
  })

  return (
    <Layout>
      <SEO title="Linkler" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>

            <ColContent>
              <Html>
                <p>
                  Günlük rutin işlerimi yaparken veya keyfi olarak internette
                  gezinirken, karşılaştığım ve kayda değer gördüğüm bazı
                  kaynakları burada arşivliyorum.
                </p>
              </Html>
            </ColContent>

            <ColExtra>
              <ExternalList urls={[twitter, feyz]} />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* SECTION DAY */}
      {Object.keys(linkGroupByDay).map(date => (
        <section key={date}>
          <div className="container">
            <Grid>
              <ColSidebar title={date} />
              <ColContent>
                {linkGroupByDay[date].map(({ node }) => (
                  <LinkPost key={node.id} {...node.frontmatter} />
                ))}
              </ColContent>
            </Grid>
          </div>
        </section>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    metaData: site {
      ...SiteMetaData
    }
    linksData: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/data/links/" } }
      limit: 300
    ) {
      edges {
        node {
          ...LinkPost
        }
      }
    }
  }
`

export default LinksPage
