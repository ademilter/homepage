import PageTransition from '@comp/page-transition'
import PageTitle from '@comp/page-title'
import useSWR from 'swr'
import { Dropmark } from '@type/dropmark'
import Head from 'next/head'

function MoodboardPage() {
  const { data } = useSWR('/api/moodboard')

  return (
    <PageTransition>
      <Head>
        <title>Moodboard - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor. Çevrem
          hakkında farkındalığı, detayları görebilmemi ve doğru anı
          yakalabilmeyi öğretiyor.
        </PageTitle>
      </div>

      <div className="c-large mt-20">
        {data ? (
          <div className="grid sm:grid-cols-2 gap-8">
            {data.map((item: Dropmark) => {
              return (
                <div key={item.id} className="mb-8">
                  <img
                    src={item.content}
                    width={item.metadata.width}
                    height={item.metadata.height}
                  />
                </div>
              )
            })}
          </div>
        ) : (
          <div>Ups!</div>
        )}
      </div>
    </PageTransition>
  )
}

export default MoodboardPage
