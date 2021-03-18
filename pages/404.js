import Head from 'next/head'
import { Container, Text } from '@chakra-ui/react'

function Error() {
  return (
    <PageTransition>
      <Head>
        <title>404</title>
      </Head>

      <Container maxW="2xl">
        <Text fontSize="2xl">404</Text>
      </Container>
    </PageTransition>
  )
}

export default Error
