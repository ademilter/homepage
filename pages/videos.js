import Head from 'next/head'
import Layout from '@comp/layout'
import { getTable } from '@lib/airtable'
import { Chakra } from '../chakra'
import NextImage from 'next/image'
import {
  Text,
  Container,
  Grid,
  GridItem,
  Box,
  Link,
  HStack
} from '@chakra-ui/react'
import Social from '@comp/social'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import parseISO from 'date-fns/parseISO'

function VideosPage({ data }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Eğitimler</title>
        </Head>

        <Container maxW="2xl">
          <Text fontSize="2xl">
            Yazılım, Tasarım ve Tecrübelerimi paylaştığım videoların listesi. Bu
            listedeki bütün videoları ücretsiz olarak izleyebilirsiniz.
          </Text>

          <Social mt={6} twitter youtube github />
        </Container>

        <Container maxW="6xl" mt={20}>
          <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={10}>
            {data.map((item) => {
              return (
                <GridItem key={item.Id}>
                  <Link href={item.Url} isExternal>
                    <NextImage
                      src={item.Photo[0].thumbnails.full.url}
                      alt={item.Name}
                      width={item.Photo[0].thumbnails.large.width}
                      height={item.Photo[0].thumbnails.large.height}
                      layout="responsive"
                    />
                    <Box mt={3}>
                      <Text as="b">{item.Name}</Text>

                      <HStack spacing={0} color="gray.500">
                        <Text>{item.Description}</Text>
                        <Text>・</Text>
                        <Text>{item.Category}</Text>
                      </HStack>
                    </Box>
                  </Link>
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
  const data = await getTable('Video')

  console.log(data)

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default VideosPage
