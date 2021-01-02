import Head from 'next/head'
import Layout from '@comp/layout'
import { getTable } from '@lib/airtable'
import { Chakra } from '../chakra'
import { AspectRatio, Image, Text, Heading } from '@chakra-ui/react'

function PhotosPage({ cover, journals, photos }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Fotoğraflar</title>
        </Head>

        {cover.length > 0 && (
          <div>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={cover[0].Photo[0].thumbnails.full.url}
                alt={cover[0].Name}
                objectFit="cover"
              />
            </AspectRatio>
            <a href={cover[0].Url}>
              <Text>{cover[0].Location}</Text>
              <Text>{cover[0].Device}</Text>
              {cover[0].Description && <Text>{cover[0].Description}</Text>}
            </a>
          </div>
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
      {title && <Heading>{title}</Heading>}

      {data.map((item) => {
        return (
          <article key={item._id}>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={item.Photo[0].thumbnails.large.url}
                alt={item.Name}
                objectFit="cover"
              />
            </AspectRatio>

            <a href={item.Url}>
              <Text>{item.Location}</Text>
              <Text>{item.Device}</Text>
            </a>
          </article>
        )
      })}
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
