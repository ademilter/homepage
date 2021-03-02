import NextImage from 'next/image'
import { Grid, Link, GridItem, Container } from '@chakra-ui/react'
import { getPhotos } from '@lib/unsplash'

function PhotosPage({ data }) {
  return (
    <>
      <Container maxW="6xl">
        <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={10}>
          {data.map((item) => {
            return (
              <GridItem key={item.id}>
                <Link href={item.links.html} isExternal>
                  <NextImage
                    src={item.urls.regular}
                    alt={item.description}
                    width={item.width}
                    height={item.height}
                    layout="responsive"
                  />
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
  const data = await getPhotos()

  return {
    props: {
      data
    },
    revalidate: 6000
  }
}

export default PhotosPage
