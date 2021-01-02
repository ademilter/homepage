import Head from 'next/head'
import Layout from '@comp/layout'
import { getTable } from '@lib/airtable'
import { Chakra } from '../chakra'
import { Image, Text, Heading } from '@chakra-ui/react'

function VideosPage({ development, design, conference }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Eğitimler</title>
        </Head>

        <Text>
          Yazılım, tasarım ve tecrübelerimi paylaştığım video eğitimlere
          ücretsiz olarak erişebilirsiniz.
        </Text>

        <Text>
          Amacım, yeni başlayan arkadaşlara yön göstermek, geçtiğim zorlu
          süreçlerden edindiğim tecrübeleri aktarmak ve işini kaliteli yapan
          insanların yetişmesine katkı sağlamak.
        </Text>

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
      {title && <Heading>{title}</Heading>}

      {data.map((item) => {
        return (
          <article>
            <Image
              src={item.Photo[0].thumbnails.large.url}
              alt={item.Name}
              objectFit="cover"
            />

            <a href={item.Url}>
              <Text>{item.Name}</Text>
              <Text>{item.Description}</Text>
            </a>
          </article>
        )
      })}
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
