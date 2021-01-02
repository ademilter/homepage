import Head from 'next/head'
import SiteConfig from '../site.config'
import Layout from '@comp/layout'
import Html from '@comp/html'
import { Grid, Col } from '@comp/grid'
import ExternalList from '@comp/external-list'
import Header from '@comp/header'
import Container from '@comp/container'
import { CustomGrid, ColContent, ColExtra, ColSidebar } from '@comp/custom-grid'
import { TextLarge, TextSmall, TextTitle } from '@comp/text'
import Figure from '@comp/figure'

function LikesPage({ data }) {
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

      <DeviceSection data={data} />
    </Layout>
  )
}

function DeviceSection({ data }) {
  return (
    <section>
      <Container>
        <CustomGrid>
          <ColContent>
            <Grid col="1" col-t="2" col-d="2">
              {data.map((item) => {
                return (
                  <Col key={item._id} span-t="1">
                    <article>
                      <Figure href={item.link} src={item.cover} alt={item.Name}>
                        <TextTitle>{item.title}</TextTitle>
                        <TextSmall>{item.domain}</TextSmall>
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
  const url = `https://api.raindrop.io/rest/v1/raindrops/0?search=[{"key":"tag","val":"history"}]`

  const res = await fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })

  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: data.items
    },
    revalidate: 60
  }
}

export default LikesPage
