import Head from 'next/head'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { getBookmark } from '@lib/raindrop'
import { StarIcon } from '@chakra-ui/icons'
import { useState } from 'react'
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
  const [like, likeSet] = useState(item.like)

  const liked = async (id) => {
    const response = await fetch('/api/like', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    const data = await response.json()
    likeSet(data.count)
  }

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
          <WrapItem>
            <Text>・</Text>
          </WrapItem>
          <WrapItem>
            <Link
              as={Text}
              onClick={() => {
                liked(item._id)
              }}
            >
              <Flex align="center">
                <StarIcon mr={1} fontSize={12} />
                {like}
              </Flex>
            </Link>
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

  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default BookmarkPage
