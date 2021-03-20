import { getBookmark } from '@lib/raindrop'
import BookmarkCard from '@comp/bookmark-card'
import PageTransition from '@comp/page-transition'
import groupBy from 'lodash.groupby'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { tr } from 'date-fns/locale'

function BookmarkPage({ data, weeks }) {
  return (
    <PageTransition>
      <div className="c-small">
        <p className="text-2xl">
          İnternette gezinirken beğendiğim ve beni takip edenlerin de
          beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.
        </p>

        {weeks.map((date) => (
          <div key={date} className="mt-20">
            <h4 className="text-gray-400">{date}. Hafta, 2021</h4>

            <div className="mt-6 space-y-8">
              {data[date].map((item) => {
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
    return (
      format(parseISO(item.created), 'w', {
        locale: tr
      }) - 1 // todo: -1'e neden gerek var?
    )
  })

  const weeks = Object.keys(dataGroupByDay)
    .map((o) => parseInt(o))
    .reverse()

  return {
    props: {
      data: dataGroupByDay,
      weeks
    },
    revalidate: 600
  }
}

export default BookmarkPage
