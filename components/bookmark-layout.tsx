import BookmarkCard from "components/bookmark-card";
import PageTransition from "components/page-transition";
import PageTitle from "components/page-title";
import Head from "next/head";
import Link from "next/link";
import { getYear } from "date-fns";

export default function BookmarkLayout({ data, year, onlyThisWeek = false }) {
  const weeks = Object.keys(data).sort((a, b) => parseInt(a) - parseInt(b));

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
              dark:text-gray-500"
            >
              {date}. Hafta, {year}
            </h4>
            <div className="mt-6 divide-y divide-gray-100 dark:divide-gray-800">
              {data[date].map((item) => {
                return (
                  <BookmarkCard
                    key={item._id}
                    bookmark={item}
                    vote={onlyThisWeek}
                  />
                );
              })}
            </div>
          </div>
        ))}

        {onlyThisWeek && (
          <div className="mt-16">
            <Link href={`/bookmarks/${getYear(new Date())}`}>
              <a
                className="py-3 px-4 bg-gray-50 border border-gray-200 rounded
              dark:bg-gray-800 dark:border-gray-700"
              >
                Tüm listeyi görüntüle →
              </a>
            </Link>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
