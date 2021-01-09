import Head from 'next/head'
import { Container, Link, Text } from '@chakra-ui/react'

function Error() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>

      <Container maxW="2xl">
        <Text fontSize="2xl">404</Text>
      </Container>
    </>
  )
}

export default Error
