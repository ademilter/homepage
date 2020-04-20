import React from 'react'
import { graphql } from 'gatsby'
import groupBy from 'lodash.groupby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  Title,
  ExternalLink,
  Header,
  FaqPost
} from '../components'

function FaqPage({ location, data: { allGithubData } }) {
  const repository = allGithubData.nodes[0].data.repository.issues.edges
  const faqGroupByLabel = groupBy(repository, ({ node }) => {
    const labels = node.labels.edges
      .map(edge => edge.node)
      .filter(label => ['website-connect'].indexOf(label.name) === -1)

    return labels[0].name
  })

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
            </ColContent>

            <ColExtra>
              <ExternalLink
                urls={[
                  { name: 'Github', url: 'https://github.com/ademilter' },
                  { name: 'Twitter', url: 'https://twitter.com/ademilter' },
                  { name: 'YouTube', url: 'https://youtube.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* SECTION LABEL */}
      {Object.keys(faqGroupByLabel)
        .reverse()
        .map(year => (
          <section key={year} id="section-last-photo">
            <div className="container">
              <Grid>
                <ColSidebar>
                  <Title>{year}</Title>
                </ColSidebar>

                <ColContent>
                  {faqGroupByLabel[year].reverse().map(({ node }) => (
                    <FaqPost key={node.id} {...node} />
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
    allGithubData {
      nodes {
        data {
          repository {
            issues {
              edges {
                node {
                  ...IssueNode
                }
              }
            }
          }
        }
      }
    }
  }
`

export default FaqPage
