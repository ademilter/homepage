import Head from "next/head";
import Raindrop from "@/lib/raindrop";
import ms from "ms";
import { format, startOfYear } from "date-fns";
import BookmarkLayout from "@/components/bookmark-layout";

export async function getStaticPaths() {
  return {
    paths: ["2021", "2022"].map((year) => {
      return {
        params: {
          year: year.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const dateStartOfYear = startOfYear(new Date(params.year));
  const date = format(dateStartOfYear, "yyyy-MM-dd");

  const raindrop = new Raindrop({ createdAt: date });
  const data = await raindrop.getBookmarksGroupByWeekNumber();

  return {
    props: { data, year: params.year },
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
      <BookmarkLayout data={data} year={year} />;
    </>
  );
}

export default BookmarkPage;
