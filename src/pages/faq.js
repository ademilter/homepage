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
  ExternalLink,
  Header
} from '../components'

function FaqPage({ location, data: { allGithubData } }) {
  const { repository } = allGithubData.nodes[0].data

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
            <ColContent>deneme</ColContent>

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

      {/* - */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Title>Son Fotoğraflar</Title>
            </ColSidebar>

            <ColContent>
              <ul>
                {repository.issues.edges.map(issue => {
                  return (
                    <li key={issue.node.id} className="mb-32">
                      <h2>{issue.node.title}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: issue.node.bodyHTML
                        }}
                      />

                      <ul>
                        {issue.node.comments.edges.map(comment => {
                          return (
                            <div key={comment.node.id}>{comment.node.id}</div>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </ColContent>
          </Grid>
        </div>
      </section>
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
                  id
                  title
                  bodyHTML
                  comments {
                    edges {
                      node {
                        id
                        bodyHTML
                        author {
                          login
                        }
                      }
                    }
                  }
                  labels {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
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
