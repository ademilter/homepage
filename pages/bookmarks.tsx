import { getBookmark } from '@lib/raindrop'
import BookmarkCard from '@comp/bookmark-card'
import PageTransition from '@comp/page-transition'
import groupBy from 'lodash.groupby'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { tr } from 'date-fns/locale'
import PageTitle from '@comp/page-title'
import { Bookmark } from '@type/bookmark'

function BookmarkPage({ data, weeks }) {
  return (
    <PageTransition>
      <div className="c-small">
        <PageTitle>
          İnternette gezinirken beğendiğim ve beni takip edenlerin de
          beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.
        </PageTitle>

        {weeks.map((date) => (
          <div key={date} className="mt-20">
            <h4
              className="
              text-2xl text-gray-400
              dark:text-gray-600"
            >
              {date}. Hafta, 2021
            </h4>
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
  const data: [Bookmark] = await getBookmark()

  console.log(data.length)

  const dataGroupByDay = groupBy(data, (item: Bookmark) => {
    const weekNumber: string = format(parseISO(item.created), 'w', {
      locale: tr
    })
    // TODO: -1'e neden gerek var?
    return parseInt(weekNumber) - 1
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
