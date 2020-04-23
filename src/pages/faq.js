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
  ExternalList,
  Header,
  FaqPost,
  Button,
  Html
} from '../components'
import { ExternalLink } from '../components/icons'

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
              <Html>
                <p>
                  Varlık gösterdiğim bütün platformlardan çok fazla soru
                  alıyorum ve bu soruların neredeyse hepsi herkesin tekrar
                  soracağı sorulardan oluşuyor. Bunun önüne geçmek için soru ve
                  cevapları herkesin görebileceği ortak bir havuzda toplamak
                  istedim.
                </p>

                <p>
                  Soru sormadan önce mutlaka aşağıdaki içeriklere göz atın.
                  Cevap bulamadığınız takdirde aşağıdaki kurallara uygun şekilde
                  sorunuzu iletin. Anlayışınız için teşekkür ederim.
                </p>

                <ul>
                  <li>Basit ve anlaşılır bir başlık kullanın.</li>
                  <li>
                    Destek ve teknik konular için Stack Overflow'u kullanın.
                  </li>
                  <li>Soru sormadan önce empati yapın ve nazik olun.</li>
                </ul>

                <Button
                  href="https://github.com/ademilter/AMA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Soru Sor</span>
                  <ExternalLink />
                </Button>
              </Html>
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

      {/* SECTION LABEL */}
      {Object.keys(faqGroupByLabel)
        .reverse()
        .map(year => (
          <section key={year} id="section-last-photo">
            <div className="container">
              <Grid>
                <ColSidebar title={year} />
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
