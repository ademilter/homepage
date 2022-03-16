import { getBookmarkGroup } from "lib/raindrop";
import ms from "ms";
import BookmarkLayout from "components/bookmark-layout";

function BookmarkPage({ data, weeks, year }) {
  return <BookmarkLayout data={data} weeks={weeks} year={year} onlyThisWeek />;
}

export async function getStaticProps() {
  const { data, weeks, year } = await getBookmarkGroup();

  return {
    props: { data, weeks: [weeks[0]], year },
    revalidate: ms("1h") / 1000,
  };
}

export default BookmarkPage;
