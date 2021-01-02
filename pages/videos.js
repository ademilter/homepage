import Head from 'next/head'
import Layout from '@comp/layout'
import { Grid, Col } from '@comp/grid'
import SidebarTitle from '@comp/sidebar-title'
import { TextLarge, TextSmall, TextTitle } from '@comp/text'
import { getTable } from '@lib/airtable'
import Figure from '@comp/figure'
import { Chakra } from '../chakra'

function VideosPage({ development, design, conference }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Eğitimler</title>
        </Head>

        <TextLarge>
          Yazılım, tasarım ve tecrübelerimi paylaştığım video eğitimlere
          ücretsiz olarak erişebilirsiniz.
        </TextLarge>

        <TextLarge>
          Amacım, yeni başlayan arkadaşlara yön göstermek, geçtiğim zorlu
          süreçlerden edindiğim tecrübeleri aktarmak ve işini kaliteli yapan
          insanların yetişmesine katkı sağlamak.
        </TextLarge>

        <DeviceSection title="Yazılım" data={development} />
        <DeviceSection title="Tasarım" data={design} />
        <DeviceSection title="Konferanslar" data={conference} />
      </Layout>
    </Chakra>
  )
}

function DeviceSection({ title, data }) {
  return (
    <section>
      {title && <SidebarTitle>{title}</SidebarTitle>}

      <Grid col="1" col-t="2">
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
    </section>
  )
}

export async function getStaticProps() {
  const data = await getTable('Video')

  const development = data.filter((o) => o.Category === 'Development')
  const design = data.filter((o) => o.Category === 'Design')
  const conference = data.filter((o) => o.Category === 'Conference')

  return {
    props: {
      development,
      design,
      conference
    },
    revalidate: 600
  }
}

export default VideosPage
