import { VStack, Container, Link, Text } from '@chakra-ui/react'
import Social from '@comp/social'
import NextImage from 'next/image'
import SiteConfig from '../site.config'

function HomePage() {
  return (
    <>
      <Container maxW="2xl">
        <VStack spacing={6} align="stretch" fontSize="2xl">
          {/*<Avatar size="2xl" src="/ademilter.jpg" name="Adem ilter" />*/}

          <Text fontWeight="bold">Merhaba, ben Adem ✨</Text>

          <Text>
            İstanbul'da yaşıyorum ve{' '}
            <Text as={Link} isExternal href="http://superpeer.com">
              Superpeer
            </Text>{' '}
            şirketinde Ürün Tasarımcı olarak çalışıyorum.
          </Text>

          <Text>
            Sektördeki eski teknoloji ve alışkanlıkları yenilerle değiştirmek
            için{' '}
            <Text as={Link} isExternal href={SiteConfig.social.youtube}>
              youtube kanalımda
            </Text>{' '}
            modern türkçe içerikler üretiyorum.
          </Text>
        </VStack>

        <Social mt={6} />
      </Container>

      <Container maxW="6xl" mt={20}>
        <NextImage
          src="/photos/i-am.jpg"
          alt="Adem ilter"
          width={1433}
          height={1018}
          layout="responsive"
        />
      </Container>
    </>
  )
}

export default HomePage
