import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'

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
                  Ben Adem, evli ve iki çocuk babası olarak İstanbul'da yaşıyorum. Şu an Superpeer şirketinde Ürün Tasarım Yöneticisi olarak çalışıyorum.
                </p>
                <p>
                  Web tasarım ve yazılım sektöründe yaklaşık 12 senedir çalışıyorum. Bu süreçte edindiğim tecrübe ve bilgi birikimini <Link to="/videos">youtube</Link> kanalımda insanlara aktarmaya çalışıyorum.
                </p>
                <p>
                  Amacım; kaliteli türkçe içeriğin az olduğu türkiye sektöründe globaldeki kaliteli kanallarla aynı seviyede içerikler üretebilmek ve sektördeki eski alışkanlıkları yenilerle değiştirerek daha iyi bir yere taşımasına ön ayak olmak.
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
