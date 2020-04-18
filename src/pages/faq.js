import React from 'react'

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
import { graphql, useStaticQuery } from 'gatsby'

function IndexPage({ location }) {
  const { allGithubData } = useStaticQuery(graphql`
    query {
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
  `)

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
                {allGithubData.nodes[0].data.repository.issues.edges.map(
                  issue => {
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
                            return <div>{comment.node.id}</div>
                          })}
                        </ul>
                      </li>
                    )
                  }
                )}
              </ul>
            </ColContent>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
