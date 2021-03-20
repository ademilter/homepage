import { tr } from 'date-fns/locale'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import { getBookmark } from '@lib/raindrop'
import groupBy from 'lodash.groupby'
import BookmarkCard from '@comp/bookmark-card'
import PageTransition from '@comp/page-transition'

function BookmarkPage({ dataGroupByDay }) {
  return (
    <PageTransition>
      <div className="c-small">
        <p className="text-2xl">
          İnternette gezinirken beğendiğim ve beni takip edenlerin de
          beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.
        </p>

        {Object.keys(dataGroupByDay).map((date) => (
          <div key={date} className="mt-20">
            <h4>{date}</h4>

            <div className="mt-4 space-y-6">
              {dataGroupByDay[date].map((item) => {
                return <BookmarkCard key={item._id} {...item} />
              })}
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const data = await getBookmark()

  const dataGroupByDay = groupBy(data, (item) => {
    return format(parseISO(item.created), 'd MMMM yyyy', { locale: tr })
  })

  return {
    props: {
      dataGroupByDay
    },
    revalidate: 600
  }
}

export default BookmarkPage
