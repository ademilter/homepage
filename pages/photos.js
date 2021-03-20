import NextImage from 'next/image'
import { getPhotos } from '@lib/unsplash'
import PageTransition from '@comp/page-transition'
import A from '@comp/a'

function PhotosPage({ data }) {
  return (
    <PageTransition>
      <div className="c-large">
        <div className="grid grid-cols-2 gap-10">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <A href={item.links.html} blank>
                  <NextImage
                    src={item.urls.regular}
                    alt={item.description}
                    width={item.width}
                    height={item.height}
                    layout="responsive"
                  />
                </A>
              </div>
            )
          })}
        </div>
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const data = await getPhotos()

  return {
    props: {
      data
    },
    revalidate: 6000
  }
}

export default PhotosPage
