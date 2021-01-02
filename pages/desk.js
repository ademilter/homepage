import Head from 'next/head'
import Layout from '@comp/layout'
import { Grid, Col } from '@comp/grid'
import SidebarTitle from '@comp/sidebar-title'
import { TextSmall, TextTitle } from '@comp/text'
import { getTable } from '@lib/airtable'
import Figure from '@comp/figure'

function DeskPage({ cover, general, home }) {
  return (
    <Layout>
      <Head>
        <title>Masam</title>
      </Head>

      {cover.length > 0 && (
        <Figure
          ratio="4-3"
          src={cover[0].Photo[0].thumbnails.full.url}
          alt={cover[0].Name}
        />
      )}

      <DeviceSection title="Genel" data={general} />
      <DeviceSection title="Ev" data={home} />
    </Layout>
  )
}

function DeviceSection({ title, data }) {
  return (
    <section>
      <SidebarTitle>{title}</SidebarTitle>

      <Grid col="1" col-t="2">
        {data.map((item) => {
          return (
            <Col key={item.id} span-t="1">
              <article>
                <Figure
                  ratio="4-3"
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
  const data = await getTable('Gear')

  const cover = data.filter((o) => o.Category === 'Cover')
  const general = data.filter((o) => o.Category === 'General')
  const home = data.filter((o) => o.Category === 'Home')

  return {
    props: {
      cover,
      general,
      home
    },
    revalidate: 600
  }
}

export default DeskPage
