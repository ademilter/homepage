import { ILink } from "@/types";
import { Metadata } from "next";
import Container from "@/components/container";
import MetricCard from "@/components/metric-card";
import BookmarkCard from "@/components/bookmark-card";
import Link from "next/link";
import { ReportView } from "@/components/view";
import SubTitle from "@/components/subtitle";
import { fetchBookmark } from "@/app/bookmarks/action";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "İnternette gezinirken beğendiğim ve beni takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.",
};

export const revalidate = 3600; // 60*60*2

export default async function Bookmark() {
  const { count, data, year } = await fetchBookmark(new Date());
  // const supporter = await fetchSupporter();

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
            {data.slice(0, 8).map((item: ILink) => {
              return <BookmarkCard week key={item._id} bookmark={item} />;
            })}
          </div>
        </div>

        <div className="mt-10 opacity-60">
          Önceki yıllara ait listeler;{" "}
          {["2021", "2022", "2023", "2024"].reverse().map((year) => (
            <Link
              key={year}
              href={`/bookmarks/${year}`}
              className="font-medium"
            >
              {year}
              {", "}
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
