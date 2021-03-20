import { getTable } from '@lib/airtable'
import NextImage from 'next/image'
import PageTransition from '@comp/page-transition'

function DeskPage({ cover, data }) {
  return (
    <PageTransition>
      <div className="c-small">
        <p className="text-2xl text-highlight">
          İşlerimi yaparken ve günlük hayatta sık kullandığım araçların listesi.
        </p>
      </div>

      {cover.length > 0 && (
        <div className="c-large mt-20">
          <NextImage
            src={cover[0].Photo[0].thumbnails.full.url}
            alt={cover[0].Name}
            width={cover[0].Photo[0].thumbnails.large.width}
            height={cover[0].Photo[0].thumbnails.large.height}
            layout="responsive"
          />
        </div>
      )}

      <div className="c-large mt-10">
        <div className="grid sm:grid-cols-2 gap-10">
          {data.map((item) => {
            return (
              <div key={item.Id}>
                <NextImage
                  src={item.Photo[0].thumbnails.full.url}
                  alt={item.Name}
                  width={item.Photo[0].thumbnails.large.width}
                  height={item.Photo[0].thumbnails.large.height}
                  layout="responsive"
                />
                <div className="mt-2">
                  <h5 className="font-bold">{item.Name}</h5>
                  <p className="text-gray-500">{item.Description}</p>
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
  const data = await getTable('Gear')

  const cover = data.filter((o) => o.Category === 'Cover')
  const general = data.filter((o) => o.Category === 'General')
  const home = data.filter((o) => o.Category === 'Home')

  return {
    props: {
      cover,
      data: [...general, ...home]
    },
    revalidate: 600
  }
}

export default DeskPage
