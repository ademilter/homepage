import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import Layout from '@comp/layout'
import { Chakra } from '../chakra'
import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'

function HomePage() {
  return (
    <Chakra>
      <Layout>
        <Head>
          <title>Home Page</title>
        </Head>

        <VStack spacing={5} align="stretch">
          <Heading>Merhaba 🖐</Heading>

          <Text fontSize="xl">
            Ben Adem, evli ve iki çocuk babası olarak İstanbul'da yaşıyorum. Şu
            an{' '}
            <Link as={NextLink} href="http://superpeer.com" isExternal>
              <a>Superpeer</a>
            </Link>{' '}
            şirketinde Ürün Tasarımcısı olarak görev alıyorum.
          </Text>

          <Box>
            <Image
              src="/i-am.jpg"
              alt="Adem ilter"
              width={1433 / 2}
              height={1018 / 2}
            />
          </Box>

          <Text fontSize="lg">
            Web tasarım ve yazılım sektöründe yaklaşık 12 senedir çalışıyorum.
            Bu süreçte edindiğim tecrübe ve bilgi birikimnini{' '}
            <Link as={NextLink} href="/videos">
              <a>youtube</a>
            </Link>{' '}
            kanalımda insanlara aktarmaya çalışıyorum.
          </Text>

          <Text fontSize="lg">
            Amacım; kaliteli türkçe içeriğin az olduğu türkiye sektöründe
            globaldeki kaliteli kanallarla aynı seviyede içerikler üretebilmek
            ve sektördeki eski alışkanlıkları yenilerle değiştirerek daha iyi
            bir yere taşımasına ön ayak olmak.
          </Text>
        </VStack>
      </Layout>
    </Chakra>
  )
}

export default HomePage
