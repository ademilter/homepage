import BookmarkCard from "@/components/bookmark-card";
import Container from "@/components/container";
import Link from "next/link";
import { getYear } from "date-fns";
import SubTitle from "./subtitle";
import { ILink } from "@/types";
import ThankYou from "@/components/thank-you";

export default function BookmarkLayout({
  title,
  data,
  year,
  onlyThisWeek = false,
}) {
  const sortedData = Object.keys(data).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  return (
    <Container>
      <h1 className="text-2xl">{title}</h1>

      <div className="mt-10">
        <ThankYou />
      </div>

      {sortedData.map((date) => (
        <div key={date} className="mt-20">
          <SubTitle>
            {date}. Hafta, {year}
          </SubTitle>

          <div className="mt-6">
            {data[date].map((item: ILink) => {
              return <BookmarkCard key={item._id} bookmark={item} />;
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
  );
}
