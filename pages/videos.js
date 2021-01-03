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
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Social from '@comp/social'

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

                      <Wrap spacing={0} align="center" color="gray.500">
                        <WrapItem>
                          <Text>{item.Category}</Text>
                        </WrapItem>
                        <WrapItem>
                          <Text>・</Text>
                        </WrapItem>
                        <WrapItem>
                          <Text>{item.Description}</Text>
                        </WrapItem>
                      </Wrap>
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
