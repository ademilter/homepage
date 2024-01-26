import { addYears, format, startOfYear } from "date-fns";
import Raindrop from "@/lib/raindrop";
import { ILink } from "@/types";
import { Metadata } from "next";
import Container from "@/components/container";
import MetricCard from "@/components/metric-card";
import BookmarkCard from "@/components/bookmark-card";
import Link from "next/link";
import { ReportView } from "@/components/view";
import SubTitle from "@/components/subtitle";
import ThankYou from "@/components/thank-you";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "İnternette gezinirken beğendiğim ve beni takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.",
};

export const revalidate = 3600; // 60*60*2

async function fetchData() {
  const dateStartOfYear = startOfYear(new Date());
  const dateEndOfYear = addYears(dateStartOfYear, 1);

  const startDateByFormat = format(dateStartOfYear, "yyyy-MM-dd");
  const endDateByFormat = format(dateEndOfYear, "yyyy-MM-dd");

  const raindrop = new Raindrop();
  const collections: ILink[] = await raindrop.getBookmark({
    search: `created:>${startDateByFormat} created:<${endDateByFormat}`,
  });

  return {
    count: collections.length,
    data: collections.slice(0, 8),
    year: format(new Date(), "yyyy"),
  };
}

export default async function Bookmark() {
  const { count, data, year } = await fetchData();

  return (
    <>
      <Container>
        <h1 className="text-xl sm:text-2xl">{metadata.description}</h1>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
          <MetricCard data={count}>Link ({year})</MetricCard>
          <MetricCard data={<ReportView incr slug={`/bookmarks/${year}`} />}>
            Görüntülenme
          </MetricCard>
        </div>
      </Container>

      <Container className="mt-12 sm:mt-14">
        <div>
          <SubTitle>Son Eklenenler</SubTitle>

          <div className="mt-4">
            {data.map((item: ILink) => {
              return <BookmarkCard week key={item._id} bookmark={item} />;
            })}
          </div>

          <div className="mt-10">
            <ThankYou />
          </div>
        </div>

        <div className="mt-10 opacity-60">
          Önceki yıllara ait listeler;{" "}
          {["2021", "2022", "2023", "2024"].reverse().map((year) => (
            <span key={year}>
              <Link href={`/bookmarks/${year}`} className="font-medium">
                {year}
              </Link>
              {", "}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}
