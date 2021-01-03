import Head from 'next/head'
import Layout from '@comp/layout'
import { getTable } from '@lib/airtable'
import { Chakra } from '../chakra'
import NextImage from 'next/image'
import { Text, Container, Grid, GridItem, Box, Link } from '@chakra-ui/react'
import Social from '@comp/social'

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

          <Social mt={6} twitter youtube github />
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
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={10}>
        {data.map((item) => {
          return (
            <GridItem key={item.Id}>
              <Link href={item.Url}>
                <NextImage
                  src={item.Photo[0].thumbnails.full.url}
                  alt={item.Name}
                  width={item.Photo[0].thumbnails.large.width}
                  height={item.Photo[0].thumbnails.large.height}
                  layout="responsive"
                />
                <Box mt={3}>
                  <Text as="b">{item.Name}</Text>
                  <Text color="gray.500">{item.Description}</Text>
                </Box>
              </Link>
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
