import Social from '@comp/social'
import NextImage from 'next/image'
import SiteConfig from '../site.config'
import PageTransition from '@comp/page-transition'

function HomePage() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col space-y-5 text-2xl">
          <p className="font-bold">Merhaba, ben Adem ✨</p>
          <p>
            İstanbul'da yaşıyorum ve{' '}
            <a
              href="http://superpeer.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Superpeer
            </a>{' '}
            şirketinde Ürün Tasarımcı olarak çalışıyorum.
          </p>
          <p>
            Sektördeki eski teknoloji ve alışkanlıkları yenilerle değiştirmek
            için{' '}
            <a
              href={SiteConfig.social.youtube}
              rel="noopener noreferrer"
              target="_blank"
            >
              youtube kanalımda
            </a>{' '}
            modern türkçe içerikler üretiyorum.
          </p>
        </div>

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
