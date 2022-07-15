import BookmarkCard from "components/bookmark-card";
import PageTransition from "components/page-transition";
import Text from "components/text";
import Head from "next/head";
import Link from "next/link";
import { getYear } from "date-fns";

export default function BookmarkLayout({ data, year, onlyThisWeek = false }) {
  const sortedData = Object.keys(data).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <PageTransition>
      <Head>
        <title>Bookmark - Adem ilter</title>
      </Head>

      <div className="c-small">
        <Text as="h2" size="pageTitle">
          İnternette gezinirken beğendiğim ve beni takip edenlerin de
          beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.
        </Text>

        {sortedData.map((date) => (
          <div key={date} className="mt-20">
            <Text as="h3" size="sectionTitle" dim={2}>
              {date}. Hafta, {year}
            </Text>
            <div className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-800">
              {data[date].map((item) => {
                return <BookmarkCard key={item._id} bookmark={item} />;
              })}
            </div>
          </div>
        ))}

        {onlyThisWeek && (
          <div className="mt-16">
            <Link href={`/bookmarks/${getYear(new Date())}`}>
              <a
                className="rounded-lg bg-zinc-50 py-3 px-4
              dark:border-zinc-700 dark:bg-zinc-800"
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
