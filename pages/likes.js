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
import Url from 'url'

function LikesPage({ likes }) {
  return (
    <Layout>
      <Head>
        <title>Beğendiklerim</title>
      </Head>

      <section id="section-hero">
        <Container>
          <CustomGrid>
            <ColSidebar>
              <Header />
            </ColSidebar>

            <ColContent>
              <Html>
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
                  SiteConfig.social.twitter,
                  SiteConfig.social.instagram,
                  SiteConfig.social.youtube
                ]}
              />
            </ColExtra>
          </CustomGrid>
        </Container>
      </section>

      <DeviceSection data={likes} />
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
                const { host } = Url.parse(item.Url)
                return (
                  <Col key={item.id} span-t="1">
                    <article>
                      <Figure
                        href={item.Url}
                        src={item.Photo[0].thumbnails.large.url}
                        alt={item.Name}
                      >
                        <TextTitle>{item.Name}</TextTitle>
                        <TextSmall>{host}</TextSmall>
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
  const table = new Table('Like')
  const data = (await table.getAllData()) || []

  return {
    props: {
      likes: data
    }
  }
}

export default LikesPage
