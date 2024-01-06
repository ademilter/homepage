import BookmarkCard from "@/components/bookmark-card";
import Container from "@/components/container";
import Link from "next/link";
import { getYear } from "date-fns";
import SubTitle from "./subtitle";
import { ILink } from "@/types";
import MetricCard from "@/components/metric-card";
import { Redis } from "@upstash/redis";
import { flatMap } from "lodash";

const redis = Redis.fromEnv();

export default async function BookmarkLayout({
  title,
  dataGroupByWeekNumber,
  year,
  totalNumberOfLinks,
  onlyThisWeek = false,
}) {
  const weekNumbers = Object.keys(dataGroupByWeekNumber).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  const bookmarks: ILink[] = flatMap(Object.values(dataGroupByWeekNumber));

  const scores = (
    await redis.mget<number[]>(
      ...bookmarks.map((bookamrk: ILink) =>
        ["bookmark", "up", bookamrk.link].join(":"),
      ),
    )
  ).reduce(
    (acc, v, i) => {
      acc[bookmarks[i].link] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <>
      <Container>
        <h1 className="text-2xl">{title}</h1>

        {/*<div className="mt-10">
          <ThankYou />
        </div>*/}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <MetricCard data={totalNumberOfLinks}>Link ({year})</MetricCard>
          <MetricCard data={totalNumberOfLinks}>
            Görüntülenme ({year})
          </MetricCard>
        </div>
      </Container>

      <Container className="mt-16">
        {weekNumbers.map((week) => (
          <div key={week}>
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

        {onlyThisWeek && (
          <div className="mt-16">
            <Link
              href={`/bookmarks/${getYear(new Date())}`}
              className="rounded-lg bg-zinc-200 px-4 py-3 no-underline hover:bg-zinc-300
              dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              Tüm listeyi görüntüle →
            </Link>
          </div>
        )}
      </Container>
    </>
  );
}
