import { notFound } from "next/navigation";
import { bookmarkGroupByWeekNumber, formatter } from "@/lib/helper";
import { ILink } from "@/types";
import { metadata as copy } from "../page";
import { Metadata } from "next";
import { Redis } from "@upstash/redis";
import Container from "@/components/container";
import MetricCard from "@/components/metric-card";
import SubTitle from "@/components/subtitle";
import BookmarkCard from "@/components/bookmark-card";
import { ReportView } from "@/components/view";
import { fetchBookmark } from "@/app/bookmarks/action";

const redis = Redis.fromEnv();

export const metadata: Metadata = copy;

export const revalidate = 3600; // 60*60*2

export async function generateStaticParams() {
  return ["2021", "2022", "2023", "2024"].map((year) => ({
    year: year.toString(),
  }));
}

export default async function BookmarkByYear({ params }) {
  const { data, year } = await fetchBookmark(new Date(params.year));

  if (!Object.keys(data).length) {
    notFound();
  }

  const dataGroupByWeekNumber = bookmarkGroupByWeekNumber(data);
  const weekNumbers = Object.keys(dataGroupByWeekNumber).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  const scores = (
    await redis.mget<number[]>(
      ...data.map((bookamrk: ILink) =>
        ["bookmark", "up", bookamrk.link].join(":"),
      ),
    )
  ).reduce(
    (acc, v, i) => {
      acc[data[i].link] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <>
      <Container>
        <h1 className="text-xl sm:text-2xl">{metadata.description}</h1>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
          <MetricCard data={formatter.format(data.length)}>
            Link ({year})
          </MetricCard>
          <MetricCard data={<ReportView incr slug={`/bookmarks/${year}`} />}>
            Görüntülenme
          </MetricCard>
        </div>
      </Container>

      <Container className="mt-16">
        {weekNumbers.map((week) => (
          <div className="mt-16" key={week}>
            <SubTitle>
              {week}. Hafta, {year}
            </SubTitle>

            <div className="mt-4">
              {dataGroupByWeekNumber[week].map((item: ILink) => {
                return (
                  <BookmarkCard
                    key={item._id}
                    bookmark={item}
                    score={scores[item.link]}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
