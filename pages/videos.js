import { getTable } from '@lib/airtable'
import NextImage from 'next/image'
import {
  Text,
  Container,
  Grid,
  GridItem,
  Box,
  Link,
  Wrap,
  WrapItem, useColorModeValue
} from '@chakra-ui/react'

function VideosPage({ data }) {
  // const bgColor = useColorModeValue('', '#30333e')

  return (
    <>
      {/*<style jsx global>*/}
      {/*  {`*/}
      {/*    body {*/}
      {/*      background: ${bgColor};*/}
      {/*    }*/}
      {/*  `}*/}
      {/*</style>*/}

      <Container maxW="2xl">
        <Text fontSize="2xl">
          Yazılım, Tasarım ve Tecrübelerimi paylaştığım videoların listesi. Bu
          listedeki bütün videoları ücretsiz olarak izleyebilirsiniz.
        </Text>
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
    </>
  )
}

export async function getStaticProps() {
  const data = await getTable('Video')

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default VideosPage
