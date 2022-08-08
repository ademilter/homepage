import Raindrop from "@/lib/raindrop";
import ms from "ms";
import { format, startOfYear } from "date-fns";
import BookmarkLayout from "@/components/bookmark-layout";

function BookmarkPage({ data, year }) {
  return <BookmarkLayout data={data} year={year} />;
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
  const dateStartOfYear = startOfYear(new Date(params.year));
  const date = format(dateStartOfYear, "yyyy-MM-dd");

  const raindrop = new Raindrop(date);
  const data = await raindrop.getBookmarksGroupByWeek();

  return {
    props: { data, year: params.year },
    revalidate: ms("1h") / 1000,
  };
}

export default BookmarkPage;
