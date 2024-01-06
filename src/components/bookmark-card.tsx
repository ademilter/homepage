"use client";

import Link from "@/components/link";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import { ILink } from "@/types";
import cx from "@/lib/cx";
import { useEffect, useState } from "react";

function BookmarkCard({
  bookmark,
  score = 0,
  week = false,
}: {
  bookmark: ILink;
  score?: number;
  week?: boolean;
}) {
  const [s, setS] = useState(score);
  const [loading, setLoading] = useState(week);

  async function getScore() {
    try {
      setLoading(true);
      const response = await fetch(`/api/bookmark?url=${bookmark.link}`);
      const data = await response.json();
      setS(data.score);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function onUp() {
    if (!week) return;

    try {
      setLoading(true);
      const response = await fetch("/api/bookmark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: bookmark.link,
        }),
      });
      const data = await response.json();
      setS(data.score);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!week) return;
    getScore();
  }, [week]);

  return (
    <article className="flex items-center gap-6 border-b border-b-zinc-200 py-4 md:py-6 dark:border-b-zinc-800">
      <div className="grow">
        <h3 className="font-semibold">
          <Link
            href={bookmark.link}
            className={cx(
              "visited:text-zinc-500 visited:decoration-zinc-200",
              "dark:visited:decoration-zinc-800",
            )}
          >
            {bookmark.title}
          </Link>
        </h3>

        <div className="mt-1 flex items-center space-x-2 font-mono text-sm opacity-70 dark:opacity-60">
          <span>{bookmark.domain}</span>
          <span>·</span>
          <span>
            {formatDistanceToNowStrict(parseISO(bookmark.created), {
              addSuffix: true,
              locale: tr,
            })}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onUp}
        disabled={!week || loading}
        className={cx(
          "flex shrink-0 items-center justify-center",
          "h-8 min-w-8 px-3",
          "rounded-lg bg-zinc-200 opacity-40 dark:bg-zinc-800",
          "hover:bg-zinc-300 hover:opacity-100 dark:hover:bg-zinc-700",
          s && "opacity-100",
          loading && "opacity-20",
        )}
      >
        <span className={cx("flex items-center gap-1 font-mono font-medium")}>
          {Number(s)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </article>
  );
}

export default BookmarkCard;
