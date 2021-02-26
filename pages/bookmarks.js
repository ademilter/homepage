import { tr } from 'date-fns/locale'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import { getBookmark } from '@lib/raindrop'
import groupBy from 'lodash.groupby'
import {
  Box,
  Text,
  Heading,
  StackDivider,
  VStack,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import BookmarkCard from '@comp/bookmark-card'

function BookmarkPage({ dataGroupByDay }) {
  const dateColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')
  const dividerColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  // const bgColor = useColorModeValue('', '#30333e')

  return (
    <>
      {/*<style jsx global>*/}
      {/*  {`*/}
      {/*    body {*/}
      {/*      background: ${bgColor};*/}
      {/*    }*/}
      {/*  `}*/}
      {/*</style>*/}

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

  // console.log(data)

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
