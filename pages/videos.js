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
          <Text fontSize="2xl">
            Yazılım, tasarım ve tecrübelerimi paylaştığım video eğitimlere
            ücretsiz olarak erişebilirsiniz.
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
    <Container maxW="6xl" mt={20}>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={8}>
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
