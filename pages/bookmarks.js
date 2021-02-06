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
  Container,
  useColorModeValue
} from '@chakra-ui/react'

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

  const descColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')
  const metaColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')

  return (
    <Flex key={item._id}>
      <Box d={['none', 'block']} mr={6} flexShrink={0} w={160}>
        <AspectRatio ratio={4 / 3}>
          <Image src={item.cover} alt={item.title} objectFit="cover" />
        </AspectRatio>
      </Box>

      <Box flexGrow={1}>
        {/* title */}
        <Text as="h4" fontWeight="bold" fontSize="lg">
          <Text as={Link} href={item.link} isExternal decoration="none">
            {item.title}
          </Text>
        </Text>

        {/* desc */}
        <Text noOfLines={1} color={descColor}>
          {item.excerpt}
        </Text>

        {/* meta */}
        <Wrap spacing={0} align="center" mt={2} color={metaColor}>
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
              decoration="none"
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
  const dateColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')
  const dividerColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <>
      <Container maxW="2xl">
        <Text fontSize="2xl">
          İnternette gezinirken beğendiğim ve beni takip edenlerin de
          beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.
        </Text>

        {Object.keys(dataGroupByDay).map((date) => (
          <Box key={date} mt={20}>
            <Heading
              tag="h4"
              fontSize="md"
              fontWeight="normal"
              color={dateColor}
            >
              {date}
            </Heading>
            <VStack
              mt={6}
              spacing={4}
              align="stretch"
              divider={<StackDivider borderBottomColor={dividerColor} />}
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
      dataGroupByDay
    },
    revalidate: 600
  }
}

export default BookmarkPage
