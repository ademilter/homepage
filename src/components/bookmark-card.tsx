"use client";

import Link from "@/components/link";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import { ILink } from "@/types";
import cx from "@/lib/cx";
import { useEffect, useState } from "react";
import { IconHeartFilled } from "@tabler/icons-react";

function BookmarkCard({
  bookmark,
  score = 0,
  week = false,
}: {
  bookmark: ILink;
  score?: number;
  week?: boolean;
}) {
  const [data, setData] = useState({ score, voted: false });
  const [loading, setLoading] = useState(week);
  const image = bookmark.media[0]?.link;

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
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(`/api/bookmark?url=${bookmark.link}`);
      const data = await response.json();
      setData({ ...data, score: data.score });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!week) return;
    getData();
  }, [week]);

  return (
    <article
      className={cx(
        "flex items-center gap-6 py-4 md:gap-10",
        "border-b border-b-zinc-200/60 dark:border-b-zinc-800",
      )}
    >
      <div className="flex grow items-start gap-6">
        <div className="hidden aspect-video w-36 shrink-0 overflow-hidden rounded bg-zinc-200 sm:flex">
          {image && (
            <img
              src={image}
              alt={bookmark.excerpt}
              className="block size-full object-cover"
            />
          )}
        </div>

        <div className="grow">
          <h3 className="font-semibold">
            <Link
              href={bookmark.link}
              className={cx(
                "decoration-zinc-600",
                "visited:decoration-zinc-200",
                "dark:visited:decoration-zinc-800",
              )}
            >
              {bookmark.title}
            </Link>
          </h3>

          {bookmark.note && <p className="mt-2 opacity-80">{bookmark.note}</p>}

          <div className="mt-2 flex items-center space-x-2 font-mono text-sm opacity-60 dark:opacity-40">
            {/*<LinkTypeIcon type={bookmark.type} />*/}
            {/*<span>{bookmark.domain}</span>*/}
            {/*<span>·</span>*/}
            <span>
              {formatDistanceToNowStrict(parseISO(bookmark.created), {
                addSuffix: true,
                locale: tr,
              })}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onUp}
        disabled={!week || loading}
        className={cx(
          "flex h-8 shrink-0 cursor-n-resize items-center justify-center px-3",
          "rounded-lg bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-800",
          week && "hover:bg-zinc-200 dark:hover:bg-zinc-700",
          data.voted &&
            "bg-pink-50 text-pink-600 hover:bg-pink-100 dark:bg-pink-200/10 dark:hover:bg-pink-200/20",
          loading && "cursor-progress opacity-60",
        )}
      >
        <span
          className={cx(
            "flex select-none items-center gap-1 font-mono font-medium",
          )}
        >
          <IconHeartFilled size={14} className="opacity-80" />
          {Number(data.score)}
        </span>
      </button>
    </article>
  );
}

function LinkTypeIcon({ type }) {
  const icons = {
    link: (
      <>
        <>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </>
      </>
    ),
    article: (
      <path
        d="M19 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-2 12h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm0 -4h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm0 -4h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
        strokeWidth="0"
        fill="currentColor"
      />
    ),
    audio: (
      <>
        <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M9 17v-13h10v13" />
        <path d="M9 8h10" />
      </>
    ),
    video: (
      <path
        d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
        strokeWidth="0"
        fill="currentColor"
      />
    ),
  };

  const icon = (child) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {child}
      </svg>
    );
  };

  if (type) return icon(icons[type]);
  return icon(icons.link);
}

export default BookmarkCard;
