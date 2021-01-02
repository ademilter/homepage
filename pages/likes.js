import Head from 'next/head'
import SiteConfig from '../site.config'
import Layout from '@comp/layout'
import Html from '@comp/html'
import ExternalList from '@comp/external-list'
import Header from '@comp/header'
import Container from '@comp/container'
import { CustomGrid, ColContent, ColExtra, ColSidebar } from '@comp/custom-grid'
import { TextLarge } from '@comp/text'
import { Link, Box, Text, HStack } from '@chakra-ui/react'

function LikesPage({ data }) {
  return (
    <Layout>
      <Head>
        <title>Beğendiklerim</title>
      </Head>

      <section id="section-hero">
        <Container>
          <CustomGrid>
            <ColSidebar>
              <Header />
            </ColSidebar>

            <ColContent>
              <Html>
                <TextLarge>
                  İnternette gezinirken beğendiğim şeylerin küçük bir listesi.
                  Beni takip edenlerin de beğeneceğini düşündüğüm, belli bir
                  kategorisi olmayan karışık şeyler.
                </TextLarge>
              </Html>
            </ColContent>

            <ColExtra>
              <ExternalList
                urls={[
                  SiteConfig.social.twitter,
                  SiteConfig.social.instagram,
                  SiteConfig.social.youtube
                ]}
              />
            </ColExtra>
          </CustomGrid>
        </Container>
      </section>

      <section>
        <Container>
          <CustomGrid>
            <ColContent>
              {data.map((item) => {
                return (
                  <Box p={4} key={item._id}>
                    <Text as="h3">
                      <Link href={item.link}>{item.title}</Link>
                    </Text>
                    <Text as="p">{item.excerpt}</Text>
                    <HStack spacing={5}>
                      <Text>{item.domain}</Text>
                      <Text>{item.created}</Text>
                    </HStack>
                  </Box>
                )
              })}
            </ColContent>
          </CustomGrid>
        </Container>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = `https://api.raindrop.io/rest/v1/raindrops/0?search=[{"key":"tag","val":"history"}]`

  const res = await fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })

  const data = await res.json()

  console.log(data)

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: data.items
    },
    revalidate: 60
  }
}

export default LikesPage
