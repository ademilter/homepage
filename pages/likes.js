import Head from 'next/head'
import Layout from '@comp/layout'
import {
  Container,
  AspectRatio,
  Image,
  Heading,
  Link,
  Box,
  Text,
  HStack,
  Flex
} from '@chakra-ui/react'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

function LikesPage({ data }) {
  return (
    <Layout>
      <Head>
        <title>Beğendiklerim</title>
      </Head>

      <Container maxW="2xl">
        <Text>
          İnternette gezinirken beğendiğim şeylerin küçük bir listesi. Beni
          takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi
          olmayan karışık şeyler.
        </Text>

        {data.map((item) => {
          return (
            <Flex py={6} key={item._id} borderBottomWidth={1}>
              <Box order={1} flexGrow={1}>
                <Heading as="h4" size="sm">
                  <Link href={item.link}>{item.title}</Link>
                </Heading>
                <Text as="p">{item.excerpt}</Text>
                <HStack spacing={0} color="gray.500">
                  <Text>{item.domain}</Text>
                  <Text>・</Text>
                  <Text>
                    {formatDistanceToNowStrict(parseISO(item.created))}
                  </Text>
                </HStack>
              </Box>
              <Box mr={6} flexShrink={0} w={[80, 120]}>
                <AspectRatio ratio={4 / 3}>
                  <Image src={item.cover} alt="naruto" objectFit="cover" />
                </AspectRatio>
              </Box>
            </Flex>
          )
        })}
      </Container>
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
