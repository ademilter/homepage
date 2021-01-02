import Head from 'next/head'
import Layout from '@comp/layout'
import { Grid, Col } from '@comp/grid'
import SidebarTitle from '@comp/sidebar-title'
import { TextSmall, TextTitle } from '@comp/text'
import { getTable } from '@lib/airtable'
import Figure from '@comp/figure'
import { Chakra } from '../chakra'

function PhotosPage({ cover, journals, photos }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Fotoğraflar</title>
        </Head>

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

        <DeviceSection data={photos} />
        <DeviceSection title="Dergiler" data={journals} />
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
    </section>
  )
}

export async function getStaticProps() {
  const data = await getTable('Photo')

  const cover = data.filter((o) => o.Category === 'Cover')
  const journals = data.filter((o) => o.Category === 'Journal')
  const photos = data.filter((o) => o.Category === 'Photo')

  return {
    props: {
      cover,
      journals,
      photos
    },
    revalidate: 600
  }
}

export default PhotosPage
