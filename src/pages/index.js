import React from 'react'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  ExternalLink,
  Header,
  Html
} from '../components'

function IndexPage({ location }) {
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
                  Ben Adem, evli ve iki çocuk babası olarak İstanbul'da
                  yaşıyorum. Askerlik vazifemi tamamladıktan sonra tanıştığım
                  web işçiliği serüvenimde 10 seneyi devirdim. Şu an Frontend
                  Geliştirici olarak <b>ICS Defense</b> şirketinde çalışıyorum.
                  Kendimi sürekli güncel tutmaya ve öğrendiklerimi insanlarla
                  paylaşmaya çalışıyorum.
                </p>
                <p>
                  Amacım, yeni başlayan arkadaşlara yön göstermek, geçtiğim
                  zorlu süreçlerden edindiğim tecrübeleri aktarmak ve işini
                  kaliteli yapan insanların yetişmesine katkı sağlamak.
                </p>
              </Html>
            </ColContent>

            <ColExtra>
              <ExternalLink
                urls={[
                  { name: 'Twitter', url: 'https://twitter.com/ademilter' },
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

export default IndexPage
