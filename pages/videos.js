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

function VideosPage({ development, design, conference }) {
  return (
    <Layout>
      <Head>
        <title>Eğitimler</title>
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
                  Yazılım, tasarım ve tecrübelerimi paylaştığım video eğitimlere
                  ücretsiz olarak erişebilirsiniz.
                </TextLarge>

                <TextLarge>
                  Amacım, yeni başlayan arkadaşlara yön göstermek, geçtiğim
                  zorlu süreçlerden edindiğim tecrübeleri aktarmak ve işini
                  kaliteli yapan insanların yetişmesine katkı sağlamak.
                </TextLarge>
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

      <DeviceSection title="Yazılım" data={development} />
      <DeviceSection title="Tasarım" data={design} />
      <DeviceSection title="Konferanslar" data={conference} />
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
                      <Figure
                        href={item.Url}
                        src={item.Photo[0].thumbnails.large.url}
                        alt={item.Name}
                      >
                        <TextTitle>{item.Name}</TextTitle>
                        <TextSmall>{item.Description}</TextSmall>
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
  const table = new Table('Video')
  const data = (await table.getAllData()) || []

  const development = data.filter((o) => o.Category === 'Development')
  const design = data.filter((o) => o.Category === 'Design')
  const conference = data.filter((o) => o.Category === 'Conference')

  return {
    props: {
      development,
      design,
      conference
    }
  }
}

export default VideosPage
