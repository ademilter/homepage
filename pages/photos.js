import { getPhotos } from '@lib/unsplash'
import PageTransition from '@comp/page-transition'
import dynamic from 'next/dynamic'
const Photos = dynamic(() => import('@comp/photos'), {
  ssr: false
})

function PhotosPage({ data }) {
  return (
    <PageTransition>
      <div className="c-large">
        <Photos data={data} />
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
