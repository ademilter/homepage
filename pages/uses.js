import Head from 'next/head'
// import Link from 'next/link'
import Image from 'next/image'
import SiteConfig from '../site.config'
import Layout from '@comp/layout'
import Html from '@comp/html'
import { Grid, Col } from '@comp/grid'
import ExternalList from '@comp/external-list'
import Header from '@comp/header'
import Container from '@comp/container'
import { CustomGrid, ColContent, ColExtra, ColSidebar } from '@comp/custom-grid'
import SidebarTitle from '@comp/sidebar-title'
import AspectRatio from '@comp/aspect-ratio'
import { TextSmall, TextTitle } from '@comp/text'

function MyDeskPage({ general, home }) {
  console.log(general, home)

  return (
    <Layout>
      <Head>
        <title>Masam</title>
      </Head>

      <section id="section-hero">
        <Container>
          <CustomGrid>
            <ColSidebar>
              <Header />
            </ColSidebar>

            <ColContent>
              <Html>
                <AspectRatio>
                  <Image
                    src="/my-desk.jpg"
                    alt="Picture of the author"
                    width={5412 / 3}
                    height={2971 / 3}
                    quality={90}
                  />
                </AspectRatio>
                <p>
                  Ben Adem, evli ve iki çocuk babası olarak İstanbul'da
                  yaşıyorum. Şu an Superpeer şirketinde Ürün Tasarımcısı olarak
                  görev alıyorum.
                </p>
              </Html>
            </ColContent>

            <ColExtra>
              <ExternalList
                urls={[
                  SiteConfig.social.vsco,
                  SiteConfig.social.instagram,
                  SiteConfig.social.twitter
                ]}
              />
            </ColExtra>
          </CustomGrid>
        </Container>
      </section>

      <DeviceSection title="Genel" data={general} />
      <DeviceSection title="Ev" data={home} />
    </Layout>
  )
}

function DeviceSection({ title, data }) {
  return (
    <section>
      <Container>
        <CustomGrid>
          <ColSidebar>
            <SidebarTitle>{title}</SidebarTitle>
          </ColSidebar>
          <ColContent>
            <Grid col="1" col-t="2">
              {data.map((item) => {
                return (
                  <Col key={item.id} span-t="1">
                    <article>
                      <AspectRatio ratio="4-3">
                        <Image
                          src={item.Photo[0].thumbnails.large.url}
                          alt={item.Name}
                          width={item.Photo[0].thumbnails.large.width}
                          height={item.Photo[0].thumbnails.large.height}
                          quality={90}
                        />
                      </AspectRatio>
                      <TextTitle>{item.Name}</TextTitle>
                      <TextSmall>{item.Description}</TextSmall>
                    </article>
                  </Col>
                )
              })}
            </Grid>
          </ColContent>
        </CustomGrid>
      </Container>
    </section>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + '/api/uses')
  const data = await res.json()

  const general = data.filter((o) => o.Category === 'General')
  const home = data.filter((o) => o.Category === 'Home')

  return {
    props: {
      general,
      home
    }
  }
}

export default MyDeskPage
