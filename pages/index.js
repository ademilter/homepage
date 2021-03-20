import NextImage from 'next/image'
import PageTransition from '@comp/page-transition'
import Social from '@comp/social'

function HomePage() {
  return (
    <PageTransition>
      <div className="c-small">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-highlight">
            Merhaba, ben Adem ilter. İstanbul'da yaşıyan Dijital Ürün
            Tasarımcısıyım.
          </h1>

          <p className="text-2xl">
            Front-end teknolojileri, sokak fotoğrafçılığı ve tipografi gibi
            konularla yakından ilgileniyorum.
          </p>

          <p className="text-2xl">
            Youtube kanalımda, sektördeki eski teknoloji ve alışkanlıkları
            yenilerle değiştirmek için modern türkçe içerikler üretiyorum.
          </p>
        </div>

        <div className="mt-10">
          <Social />
        </div>
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
