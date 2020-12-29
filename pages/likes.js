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
import { TextLarge, TextSmall, TextTitle } from '@comp/text'
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
                <TextLarge>
                  İnternette gezinirken beğendiğim şeylerin küçük bir listesi.
                  Beni takip edenlerin de beğeneceğini düşündüğüm, belli bir
                  kategorisi olmayan karışık şeyler.
                </TextLarge>
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
          {title && (
            <ColSidebar>
              <SidebarTitle>{title}</SidebarTitle>
            </ColSidebar>
          )}

          <ColContent>
            <Grid col="1" col-t="2" col-d="2">
              {data.map((item) => {
                const { host } = Url.parse(item.Url)
                return (
                  <Col key={item.id} span-t="1">
                    <article>
                      <Figure
                        href={item.Url}
                        src={
                          item.Photo
                            ? item.Photo[0].thumbnails.large.url
                            : 'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
                        }
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
