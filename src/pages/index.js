import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  ExternalList,
  Header,
  Html
} from '../components'

function IndexPage({ location, data }) {
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
                <Img fluid={data.file.childImageSharp.fluid} />

                <p>
                  Ben Adem, evli ve iki çocuk babası olarak İstanbul'da
                  yaşıyorum. Askerlik vazifemi tamamladıktan sonra tanıştığım
                  web işçiliği serüvenimde 10 seneyi devirdim. Şu an Frontend
                  Geliştirici olarak <b>ICS Defense</b> şirketinde çalışıyorum.
                </p>

                <p>
                  Kendimi sürekli güncel tutmaya ve öğrendiklerimi insanlarla
                  paylaşmaya çalışıyorum. Özellikle youtube kanalımda eğitim
                  videoları yayınlıyorum.
                </p>
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
    </Layout>
  )
}

export const query = graphql`
  {
    file(name: { eq: "i-am" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
