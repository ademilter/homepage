import Head from 'next/head'
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
                <p>
                  Yazılım, tasarım ve tecrübelerimi paylaştığım video eğitimlere
                  ücretsiz olarak erişebilirsiniz.
                </p>

                <p>
                  Amacım, yeni başlayan arkadaşlara yön göstermek, geçtiğim
                  zorlu süreçlerden edindiğim tecrübeleri aktarmak ve işini
                  kaliteli yapan insanların yetişmesine katkı sağlamak.
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
                      <AspectRatio>
                        <Image
                          src={item.Photo[0].thumbnails.large.url}
                          alt={item.Name}
                          width={item.Photo[0].thumbnails.large.width}
                          height={item.Photo[0].thumbnails.large.height}
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
  const res = await fetch(process.env.API_URL + '/api/videos')
  const data = await res.json()

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
