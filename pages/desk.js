import Head from 'next/head'
import Layout from '@comp/layout'
import { getTable } from '@lib/airtable'
import { Chakra } from '../chakra'
import { Image, Text, Heading, AspectRatio } from '@chakra-ui/react'

function DeskPage({ cover, general, home }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Masam</title>
        </Head>

        {cover.length > 0 && (
          <Image
            src={cover[0].Photo[0].thumbnails.full.url}
            alt={cover[0].Name}
            objectFit="cover"
          />
        )}

        <DeviceSection title="Genel" data={general} />
        <DeviceSection title="Ev" data={home} />
      </Layout>
    </Chakra>
  )
}

function DeviceSection({ title, data }) {
  return (
    <section>
      <Heading>{title}</Heading>

      {data.map((item) => {
        return (
          <div>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={item.Photo[0].thumbnails.full.url}
                alt={item.Name}
                objectFit="cover"
              />
            </AspectRatio>
            <a href={item.Url}>
              <Text>{item.Name}</Text>
              <Text>{item.Description}</Text>
            </a>
          </div>
        )
      })}
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
