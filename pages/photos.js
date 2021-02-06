import { getTable } from '@lib/airtable'
import NextImage from 'next/image'
import { Grid, Link, GridItem, Text, Container } from '@chakra-ui/react'

function PhotosPage({ data }) {
  return (
    <>
      <Container maxW="2xl">
        <Text fontSize="2xl">Buraya metin gelecek</Text>
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
                  {/*<Box mt={3}>*/}
                  {/*  <Text as="b">{item.Location}</Text>*/}
                  {/*  <Text color="gray.500">{item.Device}</Text>*/}
                  {/*</Box>*/}
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
  const data = await getTable('Photo')

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default PhotosPage
