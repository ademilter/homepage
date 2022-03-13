import { getBookmark } from "lib/raindrop";
import BookmarkCard from "components/bookmark-card";
import PageTransition from "components/page-transition";
import groupBy from "lodash.groupby";
import { parseISO, format, getYear } from "date-fns";
import PageTitle from "components/page-title";
import { Bookmark } from "types/Bookmark";
import Head from "next/head";

function BookmarkPage({ data, weeks, year }) {
  return (
    <PageTransition>
      <Head>
        <title>Bookmark - Adem ilter</title>
      </Head>

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
              {date}. Hafta, {year}
            </h4>
            <div className="mt-6 space-y-6">
              {data[date].map((item) => {
                return <BookmarkCard key={item._id} {...item} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const data: [Bookmark] = await getBookmark();

  const dataGroupByDay = groupBy(data, (item: Bookmark) => {
    const dateISO = parseISO(item.created);
    const week = format(dateISO, "I"); // ISO week of year | 1, 2, ..., 53
    const month = format(dateISO, "M"); // 1, 2 ..., 12

    if (month === "1" && ["52", "53"].includes(week)) return 0;
    return week;
  });

  const weeks = Object.keys(dataGroupByDay)
    .map((o) => parseInt(o))
    .reverse();

  return {
    props: {
      data: dataGroupByDay,
      weeks,
      year: getYear(new Date()),
    },
    revalidate: 7200,
  };
}

export default BookmarkPage;
