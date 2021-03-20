import NextImage from 'next/image'
import PageTransition from '@comp/page-transition'

function HomePage() {
  return (
    <PageTransition>
      <div className="c-small">
        <p className="text-2xl">
          <b className="text-gray-900">
            Merhaba, ben Adem ilter. İstanbul'da yaşıyan Dijital Ürün
            Tasarımcısıyım.
          </b>{' '}
          Ayrıca front-end teknolojileri, sokak fotoğrafçılığı ve tipografi ile
          yakından ilgileniyorum.
        </p>

        <p className="text-2xl mt-6">
          Youtube kanalımda, sektördeki eski teknoloji ve alışkanlıkları
          yenilerle değiştirmek için modern türkçe içerikler üretiyorum.
        </p>
      </div>

      <div className="c-large">
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
