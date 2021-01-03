import Head from 'next/head'
import Layout from '@comp/layout'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { Chakra } from '../chakra'
import { getBookmark } from '@lib/raindrop'
import {
  AspectRatio,
  Image,
  Heading,
  Link,
  Box,
  Text,
  HStack,
  Flex,
  StackDivider,
  VStack,
  Container,
  IconButton
} from '@chakra-ui/react'
import Social from '@comp/social'

function BookmarkPage({ data }) {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Beğendiklerim</title>
        </Head>

        <Container maxW="2xl">
          <Text fontSize="2xl">
            İnternette gezinirken beğendiğim şeylerin küçük bir listesi. Beni
            takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi
            olmayan karışık şeyler.
          </Text>

          <Social mt={6} twitter youtube github instagram />

          <VStack
            mt={20}
            spacing={6}
            align="stretch"
            divider={<StackDivider />}
          >
            {data.map((item) => {
              return (
                <Flex key={item._id}>
                  <Box order={1} flexGrow={1}>
                    <Heading as="h4" size="sm">
                      <Link href={item.link}>{item.title}</Link>
                    </Heading>
                    <Text noOfLines={2}>{item.excerpt}</Text>
                    <HStack spacing={0} color="gray.500">
                      <Text>{item.domain}</Text>
                      <Text>・</Text>
                      <Text>
                        {formatDistanceToNowStrict(parseISO(item.created))}
                      </Text>
                    </HStack>
                  </Box>
                  <Box mr={6} flexShrink={0} w={['80px', 120]}>
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={item.cover}
                        alt={item.title}
                        objectFit="cover"
                      />
                    </AspectRatio>
                  </Box>
                </Flex>
              )
            })}
          </VStack>
        </Container>
      </Layout>
    </Chakra>
  )
}

export async function getStaticProps() {
  const data = await getBookmark()

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

export default BookmarkPage
