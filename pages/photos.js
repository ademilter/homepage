import Head from 'next/head'
import SiteConfig from '../site.config'
import Layout from '@comp/layout'
import Html from '@comp/html'
import { Grid, Col } from '@comp/grid'
import ExternalList from '@comp/external-list'
import Header from '@comp/header'
import Container from '@comp/container'
import { CustomGrid, ColContent, ColExtra, ColSidebar } from '@comp/custom-grid'
import SidebarTitle from '@comp/sidebar-title'
import { TextSmall, TextTitle } from '@comp/text'
import { sleep, Table } from '@lib/helper'
import Figure from '@comp/figure'

function PhotosPage({ cover, journals, photos }) {
  return (
    <Layout>
      <Head>
        <title>Fotoğraflar</title>
      </Head>

      <section id="section-hero">
        <Container>
          <CustomGrid>
            <ColSidebar>
              <Header />
            </ColSidebar>

            <ColContent>
              <Html>
                <a href={cover.Url}>
                  <Figure
                    src={cover.Photo[0].thumbnails.full.url}
                    alt={cover.Name}
                  >
                    <TextTitle>{cover.Name}</TextTitle>
                    <TextSmall>
                      {cover.Location} • {cover.Device}
                    </TextSmall>
                  </Figure>
                </a>

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

      <DeviceSection data={photos} />
      <DeviceSection title="Dergiler" data={journals} />
    </Layout>
  )
}

function DeviceSection({ title, data }) {
  return (
    <section>
      <Container>
        <CustomGrid>
          <ColSidebar>
            {title && <SidebarTitle>{title}</SidebarTitle>}
          </ColSidebar>

          <ColContent>
            <Grid col="1" col-t="2" col-d="3">
              {data.map((item) => {
                return (
                  <Col key={item.id} span-t="1">
                    <article>
                      <a href={item.Url}>
                        <Figure
                          ratio="4-3"
                          src={item.Photo[0].thumbnails.large.url}
                          alt={item.Name}
                        >
                          <TextTitle>{item.Name}</TextTitle>
                          <TextSmall>
                            {item.Location} • {item.Device}
                          </TextSmall>
                        </Figure>
                      </a>
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
  await sleep()
  const table = new Table('Photo')
  const data = (await table.getAllData()) || []

  const cover = data.filter((o) => o.Category === 'Cover')
  const journals = data.filter((o) => o.Category === 'Journal')
  const photos = data.filter((o) => o.Category === 'Photo')

  return {
    props: {
      cover: cover[0],
      journals,
      photos
    }
  }
}

export default PhotosPage
