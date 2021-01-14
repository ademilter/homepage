import Head from 'next/head'
import { tr } from 'date-fns/locale'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import format from 'date-fns/format'
import { getBookmark } from '@lib/raindrop'
import { StarIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import groupBy from 'lodash.groupby'
import {
  AspectRatio,
  Image,
  Wrap,
  WrapItem,
  Link,
  Box,
  Text,
  Flex,
  Heading,
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
                addSuffix: true,
                locale: tr
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

function BookmarkPage({ dataGroupByDay }) {
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

        {Object.keys(dataGroupByDay).map((date) => (
          <Box mt={20}>
            <Heading tag="h4" size="sm" fontWeight="normal" color="gray.500">
              {date}
            </Heading>
            <VStack
              mt={5}
              spacing={5}
              align="stretch"
              divider={<StackDivider />}
            >
              {dataGroupByDay[date].map((item) => {
                return <BookmarkCard key={item._id} {...item} />
              })}
            </VStack>
          </Box>
        ))}
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const data = await getBookmark()

  const dataGroupByDay = groupBy(data, (item) => {
    return format(parseISO(item.created), 'd MMMM yyyy', { locale: tr })
  })

  return {
    props: {
      data,
      dataGroupByDay
    },
    revalidate: 600
  }
}

export default BookmarkPage
