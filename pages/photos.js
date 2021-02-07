import { getTable } from '@lib/airtable'
import NextImage from 'next/image'
import { Grid, Link, GridItem, Text, Container } from '@chakra-ui/react'

function PhotosPage({ data }) {
  return (
    <>
      <style jsx global>
        {`
          body {
            background-color: #403737;
          }
        `}
      </style>
      {/*<Container maxW="2xl">*/}
      {/*  <Text fontSize="2xl">Buraya metin gelecek</Text>*/}
      {/*</Container>*/}

      {/*<Container maxW="6xl" mt={20}>*/}

      <Container maxW="6xl">
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
