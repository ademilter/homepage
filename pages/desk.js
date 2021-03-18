import { getTable } from '@lib/airtable'
import NextImage from 'next/image'
import { Text, Container, Grid, GridItem, Box } from '@chakra-ui/react'
import PageTransition from '@comp/page-transition'

function DeskPage({ cover, data }) {
  return (
    <PageTransition>
      <Container maxW="2xl">
        <Text fontSize="2xl">
          İşlerimi yaparken ve günlük hayatta sık kullandığım araçların listesi.
        </Text>
      </Container>

      {cover.length > 0 && (
        <Container maxW="6xl" mt={20}>
          <NextImage
            src={cover[0].Photo[0].thumbnails.full.url}
            alt={cover[0].Name}
            width={cover[0].Photo[0].thumbnails.large.width}
            height={cover[0].Photo[0].thumbnails.large.height}
            layout="responsive"
          />
        </Container>
      )}

      <Container maxW="6xl" mt={20}>
        <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={10}>
          {data.map((item) => {
            return (
              <GridItem key={item.Id}>
                <Box>
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
                </Box>
              </GridItem>
            )
          })}
        </Grid>
      </Container>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const data = await getTable('Gear')

  const cover = data.filter((o) => o.Category === 'Cover')
  const general = data.filter((o) => o.Category === 'General')
  const home = data.filter((o) => o.Category === 'Home')

  return {
    props: {
      cover,
      data: [...general, ...home]
    },
    revalidate: 600
  }
}

export default DeskPage
