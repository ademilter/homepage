import PageTransition from 'components/page-transition'
import PageTitle from 'components/page-title'
import useSWR from 'swr'
import { Dropmark } from 'types/dropmark'
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
          İyi tasarlanmış ürünleri incelemekten aşırı keyif alırım. Bu tür
          ürünlerde gördüğüm küçük ama tatlı detayların ekran görüntülerini
          toplayarak ilham olabilecek bir koleksiyon oluşturuyorum.
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
