import Raindrop from "@/lib/raindrop";
import { format, startOfYear } from "date-fns";
import BookmarkLayout from "@/components/bookmark-layout";

export const revalidate = 7200; // 60*60*2

export async function generateStaticParams() {
  return ["2021", "2022"].map((year) => ({
    year: year.toString(),
  }));
}

async function fetchData(params) {
  const dateStartOfYear = startOfYear(new Date(params.year));
  const date = format(dateStartOfYear, "yyyy-MM-dd");

  const raindrop = new Raindrop({ createdAt: date });
  const data = await raindrop.getBookmarksGroupByWeekNumber();

  return {
    data,
    year: params.year,
  };
}

export default async function BookmarkByYear({ params }) {
  const { data, year } = await fetchData(params);

  return <BookmarkLayout data={data} year={year} />;
}
