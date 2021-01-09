import Head from 'next/head'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { getBookmark } from '@lib/raindrop'
import { StarIcon } from '@chakra-ui/icons'
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
import { useState } from 'react'

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
      <Box order={1} flexGrow={1}>
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
                {like ? like : null}
              </Flex>
            </Link>
          </WrapItem>
        </Wrap>
      </Box>
      <Box mr={6} flexShrink={0} w={['80px', 120]}>
        <AspectRatio ratio={4 / 3}>
          <Image src={item.cover} alt={item.title} objectFit="cover" />
        </AspectRatio>
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
      data
    },
    revalidate: 600
  }
}

export default BookmarkPage
