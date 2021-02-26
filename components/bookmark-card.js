import React from 'react'
import {
  Text,
  Link,
  Box,
  Flex,
  AspectRatio,
  Image,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import parseISO from 'date-fns/parseISO'
import { tr } from 'date-fns/locale'

function BookmarkCardMeta(item) {
  const metaColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')

  return (
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
    </Wrap>
  )
}

function BookmarkCard(item) {
  const descColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

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

        <BookmarkCardMeta {...item} />
      </Box>
    </Flex>
  )
}

export default BookmarkCard
