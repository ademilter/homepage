import Raindrop from "@/lib/raindrop";
import { format, startOfWeek } from "date-fns";
import BookmarkLayout from "@/components/bookmark-layout";

export const revalidate = 7200; // 60*60*2

async function fetchData() {
  const dateStartOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const date = format(dateStartOfWeek, "yyyy-MM-dd");

  const raindrop = new Raindrop({ createdAt: date });
  const data = await raindrop.getBookmarksGroupByWeekNumber();

  return {
    data,
    year: format(dateStartOfWeek, "yyyy"),
  };
}

export default async function Bookmark() {
  const { data, year } = await fetchData();

  return <BookmarkLayout data={data} year={year} onlyThisWeek />;
}
