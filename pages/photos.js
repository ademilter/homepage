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
              {cover.length > 0 && (
                <Figure
                  href={cover[0].Url}
                  src={cover[0].Photo[0].thumbnails.full.url}
                  alt={cover[0].Name}
                >
                  <TextTitle>{cover[0].Location}</TextTitle>
                  <TextSmall>{cover[0].Device}</TextSmall>
                  {cover[0].Description && (
                    <TextSmall>{cover[0].Description}</TextSmall>
                  )}
                </Figure>
              )}
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
            <Grid col="1" col-t="2">
              {data.map((item) => {
                return (
                  <Col key={item.id} span-t="1">
                    <article>
                      <Figure
                        href={item.Url}
                        ratio="4-3"
                        src={item.Photo[0].thumbnails.large.url}
                        alt={item.Name}
                      >
                        <TextTitle>{item.Location}</TextTitle>
                        <TextSmall>{item.Device}</TextSmall>
                      </Figure>
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
      cover,
      journals,
      photos
    }
  }
}

export default PhotosPage
