import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { Container, Heading, Link, Text } from '@chakra-ui/react'

function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <Container maxW="2xl">
        <Heading>Merhaba 🖐</Heading>

        <Text fontSize="xl" mt={2}>
          Ben Adem, evli ve iki çocuk babası olarak İstanbul'da yaşıyorum. Şu an{' '}
          <Link as={NextLink} href="http://superpeer.com" isExternal>
            <a>Superpeer</a>
          </Link>{' '}
          şirketinde Ürün Tasarımcısı olarak görev alıyorum.
        </Text>
      </Container>

      <Container maxW="4xl" my={8}>
        <NextImage
          src="/i-am.jpg"
          alt="Adem ilter"
          width={1433}
          height={1018}
          layout="responsive"
        />
      </Container>

      <Container maxW="2xl">
        <Text fontSize="lg">
          Web tasarım ve yazılım sektöründe yaklaşık 12 senedir çalışıyorum. Bu
          süreçte edindiğim tecrübe ve bilgi birikimnini{' '}
          <Link as={NextLink} href="/videos">
            <a>youtube</a>
          </Link>{' '}
          kanalımda insanlara aktarmaya çalışıyorum.
        </Text>

        <Text fontSize="lg" mt={4}>
          Amacım; kaliteli türkçe içeriğin az olduğu türkiye sektöründe
          globaldeki kaliteli kanallarla aynı seviyede içerikler üretebilmek ve
          sektördeki eski alışkanlıkları yenilerle değiştirerek daha iyi bir
          yere taşımasına ön ayak olmak.
        </Text>
      </Container>
    </>
  )
}

export default HomePage
