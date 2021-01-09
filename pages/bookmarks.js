import Head from 'next/head'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { getBookmark } from '@lib/raindrop'
import {
  AspectRatio,
  Image,
  Wrap,
  WrapItem,
  Link,
  Box,
  Text,
  Flex,
  StackDivider,
  VStack,
  Container
} from '@chakra-ui/react'
import Social from '@comp/social'

function BookmarkCard(item) {
  return (
    <Flex key={item._id}>
      <Box d={['none', 'block']} mr={6} flexShrink={0} w={140}>
        <AspectRatio ratio={4 / 3}>
          <Image src={item.cover} alt={item.title} objectFit="cover" />
        </AspectRatio>
      </Box>
      <Box flexGrow={1}>
        <Text as="h4" fontWeight="bold" size="sm">
          <Link href={item.link} isExternal>
            {item.title}
          </Link>
        </Text>
        <Text noOfLines={2}>{item.excerpt}</Text>
        <Wrap spacing={0} align="center" color="gray.500">
          <WrapItem>
            <Text>{item.domain}</Text>
          </WrapItem>
          <WrapItem>
            <Text>・</Text>
          </WrapItem>
          <WrapItem>
            <Text>
              {formatDistanceToNowStrict(parseISO(item.created), {
                addSuffix: true
              })}
            </Text>
          </WrapItem>
        </Wrap>
      </Box>
    </Flex>
  )
}

function BookmarkPage({ data }) {
  return (
    <>
      <Head>
        <title>Beğendiklerim</title>
      </Head>

      <Container maxW="2xl">
        <Text fontSize="2xl">
          İnternette gezinirken beğendiğim ve beni takip edenlerin de
          beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.
        </Text>

        <Social mt={6} twitter youtube github instagram />

        <VStack mt={20} spacing={6} align="stretch" divider={<StackDivider />}>
          {data.map((item) => {
            return <BookmarkCard key={item._id} {...item} />
          })}
        </VStack>
      </Container>
    </>
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
    revalidate: 600
  }
}

export default BookmarkPage
