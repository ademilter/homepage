import { VStack, Link, Text } from '@chakra-ui/react'
import Social from '@comp/social'
import NextImage from 'next/image'
import SiteConfig from '../site.config'
import React from 'react'
import PageTransition from '@comp/page-transition'

function HomePage() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4">
        <VStack spacing={6} align="stretch" fontSize="2xl">
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
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mt-20">
          <NextImage
            src="/photos/i-am.jpg"
            alt="Adem ilter"
            width={1433}
            height={1018}
            layout="responsive"
          />
        </div>
      </div>
    </PageTransition>
  )
}

export default HomePage
