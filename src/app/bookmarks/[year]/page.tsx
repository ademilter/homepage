import { addYears, format, startOfYear } from "date-fns";
import BookmarkLayout from "@/components/bookmark-layout";
import { notFound } from "next/navigation";
import Raindrop from "@/lib/raindrop";
import bookmarkGroupByWeekNumber from "@/lib/helper";
import { ILink } from "@/types";
import { metadata as copy } from "../page";
import { Metadata } from "next";

export const metadata: Metadata = copy;

export const revalidate = 7200; // 60*60*2

export async function generateStaticParams() {
  return ["2021", "2022", "2023"].map((year) => ({
    year: year.toString(),
  }));
}

async function fetchData(params) {
  const dateStartOfYear = startOfYear(new Date(params.year));
  const dateEndOfYear = addYears(dateStartOfYear, 1);

  const startDateByFormat = format(dateStartOfYear, "yyyy-MM-dd");
  const endDateByFormat = format(dateEndOfYear, "yyyy-MM-dd");

  const raindrop = new Raindrop();
  const collections: ILink[] = await raindrop.getBookmark({
    search: `created:>${startDateByFormat} created:<${endDateByFormat}`,
  });

  const data = bookmarkGroupByWeekNumber(collections);

  return {
    data,
    year: params.year,
  };
}

export default async function BookmarkByYear({ params }) {
  const { data, year } = await fetchData(params);

  if (!Object.keys(data).length) {
    notFound();
  }

  return (
    <BookmarkLayout title={metadata.description} data={data} year={year} />
  );
}
