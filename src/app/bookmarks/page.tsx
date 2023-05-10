import { format, startOfWeek } from "date-fns";
import BookmarkLayout from "@/components/bookmark-layout";
import Raindrop from "@/lib/raindrop";
import bookmarkGroupByWeekNumber from "@/lib/helper";
import { ILink } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "İnternette gezinirken beğendiğim ve beni takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.",
};

export const revalidate = 7200; // 60*60*2

async function fetchData() {
  const dateStartOfWeek = startOfWeek(new Date());
  const date = format(dateStartOfWeek, "yyyy-MM-dd");

  const raindrop = new Raindrop();
  const collections: ILink[] = await raindrop.getBookmark({
    search: `created:>${date}`,
  });

  const data = bookmarkGroupByWeekNumber(collections);

  return {
    data,
    year: format(dateStartOfWeek, "yyyy"),
  };
}

export default async function Bookmark() {
  const { data, year } = await fetchData();

  return (
    <BookmarkLayout
      title={metadata.description}
      data={data}
      year={year}
      onlyThisWeek
    />
  );
}
