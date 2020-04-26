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

function IndexPage({ location, data: { metaData, heroData } }) {
  const { twitter, youtube, instagram } = metaData.siteMetadata.socialLinks

  return (
    <Layout>
      <SEO title="Anasayfa" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>
            <ColContent>
              <Html>
                <Img fluid={heroData.childImageSharp.fluid} />

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
              <ExternalList urls={[twitter, youtube, instagram]} />
            </ColExtra>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    metaData: site {
      ...SiteMetaData
    }
    heroData: file(name: { eq: "i-am" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
