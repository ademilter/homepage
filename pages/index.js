import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import Layout from '@comp/layout'
import { Chakra } from '../chakra'
import { Container, Heading, Link, Text } from '@chakra-ui/react'

function HomePage() {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Home Page</title>
        </Head>

        <Container maxW="2xl">
          <Text fontSize="2xl">
            Merhaba, ben Adem. Evli ve iki çocuk babası olarak İstanbul'da
            yaşıyorum. Şu an{' '}
            <Link as={NextLink} href="http://superpeer.com" isExternal>
              <a>Superpeer</a>
            </Link>{' '}
            şirketinde Ürün Tasarımcısı olarak görev alıyorum.
          </Text>
        </Container>

        <Container maxW="6xl" mt={20}>
          <Image src="/i-am.jpg" alt="Adem ilter" width={1433} height={1018} />
        </Container>
      </Layout>
    </Chakra>
  )
}

export default HomePage
