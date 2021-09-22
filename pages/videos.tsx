import { getTable } from 'lib/airtable'
import NextImage from 'next/image'
import PageTransition from 'components/page-transition'
import A from 'components/a'
import PageTitle from 'components/page-title'
import Head from 'next/head'

function VideosPage({ data }) {
  return (
    <PageTransition>
      <Head>
        <title>Videos - Adem ilter</title>
      </Head>

      <div className="c-small">
        <PageTitle>
          Yazılım, Tasarım ve Tecrübelerimi paylaştığım videoların listesi. Bu
          listedeki bütün videoları ücretsiz olarak izleyebilirsiniz.
        </PageTitle>
      </div>

      <div className="c-large mt-20">
        <div className="grid sm:grid-cols-2 gap-10">
          {data.map((item) => {
            return (
              <div key={item.Id}>
                <A href={item.Url} blank>
                  <NextImage
                    src={item.Photo[0].thumbnails.full.url}
                    alt={item.Name}
                    width={item.Photo[0].thumbnails.large.width}
                    height={item.Photo[0].thumbnails.large.height}
                    layout="responsive"
                  />
                </A>
                <div className="mt-2">
                  <h3 className="font-bold text-highlight">
                    <A href={item.Url} blank>
                      {item.Name}
                    </A>
                  </h3>

                  <div className="flex space-x-1 text-gray-500">
                    <span>{item.Category},</span>
                    <span>{item.Description}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const data = await getTable('Video')

  return {
    props: {
      data
    }
  }
}

export default VideosPage
