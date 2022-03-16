import { getBookmarkGroup } from "lib/raindrop";
import ms from "ms";
import BookmarkLayout from "components/bookmark-layout";

function BookmarkPage({ data, weeks, year }) {
  return <BookmarkLayout data={data} weeks={weeks} year={year} />;
}

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
  const { data, weeks, year } = await getBookmarkGroup(params.year);

  return {
    props: { data, weeks, year },
    revalidate: ms("1h") / 1000,
  };
}

export default BookmarkPage;
