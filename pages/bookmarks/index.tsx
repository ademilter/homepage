import Head from "next/head";
import Raindrop from "@/lib/raindrop";
import ms from "ms";
import { format, startOfWeek } from "date-fns";
import BookmarkLayout from "@/components/bookmark-layout";

export async function getStaticProps() {
  const dateStartOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const date = format(dateStartOfWeek, "yyyy-MM-dd");

  const raindrop = new Raindrop({ createdAt: date });
  const data = await raindrop.getBookmarksGroupByWeekNumber();

  return {
    props: { data, year: format(dateStartOfWeek, "yyyy") },
    revalidate: ms("1h") / 1000,
  };
}

function BookmarkPage({ data, year }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/bookmarks/rss.xml"
        />
      </Head>
      <BookmarkLayout data={data} year={year} onlyThisWeek />;
    </>
  );
}

export default BookmarkPage;
