import Head from 'next/head'
import Layout from '@comp/layout'
import { getTable } from '@lib/airtable'
import { Chakra } from '../chakra'
import {
  AspectRatio,
  Grid,
  GridItem,
  Image,
  Text,
  Heading,
  Container
} from '@chakra-ui/react'

function PhotosPage({ data }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Fotoğraflar</title>
        </Head>

        <Container maxW="2xl">
          <Text fontSize="2xl">
            İnternette gezinirken beğendiğim şeylerin küçük bir listesi. Beni
            takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi
            olmayan karışık şeyler.
          </Text>
        </Container>

        <Container maxW="6xl" mt={20}>
          <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={8}>
            {data.map((item) => {
              return (
                <GridItem key={item._id}>
                  <Image
                    src={item.Photo[0].url}
                    alt={item.Name}
                    objectFit="cover"
                  />

                  <a href={item.Url}>
                    <Text>{item.Location}</Text>
                    <Text>{item.Device}</Text>
                  </a>
                </GridItem>
              )
            })}
          </Grid>
        </Container>
      </Layout>
    </Chakra>
  )
}

export async function getStaticProps() {
  const data = await getTable('Photo')

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default PhotosPage
