import Head from 'next/head'
import Layout from '@comp/layout'
import { getTable } from '@lib/airtable'
import { Chakra } from '../chakra'
import {
  Image,
  Text,
  Heading,
  Container,
  Grid,
  GridItem
} from '@chakra-ui/react'

function VideosPage({ development, design, conference }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Eğitimler</title>
        </Head>

        <Container maxW="2xl">
          <Heading>Eğitimler</Heading>

          <Text fontSize="xl" mt={2}>
            Yazılım, tasarım ve tecrübelerimi paylaştığım video eğitimlere
            ücretsiz olarak erişebilirsiniz.
          </Text>

          <Text mt={2}>
            Amacım, yeni başlayan arkadaşlara yön göstermek, geçtiğim zorlu
            süreçlerden edindiğim tecrübeleri aktarmak ve işini kaliteli yapan
            insanların yetişmesine katkı sağlamak.
          </Text>
        </Container>

        <DeviceSection title="Yazılım" data={development} />
        <DeviceSection title="Tasarım" data={design} />
        <DeviceSection title="Konferanslar" data={conference} />
      </Layout>
    </Chakra>
  )
}

function DeviceSection({ title, data }) {
  return (
    <Container maxW="6xl" my={8}>
      {title && <Heading>{title}</Heading>}

      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={4}>
        {data.map((item) => {
          return (
            <GridItem key={item._id}>
              <Image
                src={item.Photo[0].thumbnails.large.url}
                alt={item.Name}
                objectFit="cover"
              />

              <a href={item.Url}>
                <Text>{item.Name}</Text>
                <Text>{item.Description}</Text>
              </a>
            </GridItem>
          )
        })}
      </Grid>
    </Container>
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
