import { getTable } from '@lib/airtable'
import NextImage from 'next/image'
import PageTransition from '@comp/page-transition'
import A from '@comp/a'

function VideosPage({ data }) {
  return (
    <PageTransition>
      <div className="c-sm">
        <p className="text-2xl">
          Yazılım, Tasarım ve Tecrübelerimi paylaştığım videoların listesi. Bu
          listedeki bütün videoları ücretsiz olarak izleyebilirsiniz.
        </p>
      </div>

      <div className="c-lg mt-20">
        <div className="grid grid-cols-2 gap-10">
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
                  <h5 className="font-bold">
                    <A href={item.Url} blank>
                      {item.Name}
                    </A>
                  </h5>

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
    },
    revalidate: 600
  }
}

export default VideosPage
