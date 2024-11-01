"use client";

import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import { ILink } from "@/types";
import cx from "@/lib/cx";

function BookmarkCard({ bookmark }: { bookmark: ILink; score?: number }) {
  const image = bookmark.media[0]?.link;

  return (
    <article className="mb-4 rounded-xl bg-zinc-100 px-4 py-3 sm:px-6 sm:py-5">
      {/*{image && <img className="w-44" src={image} alt={bookmark.title} />}*/}

      <h3 className="line-clamp-1 font-semibold">
        <a href={bookmark.link} className={cx("visited:text-mute")}>
          {bookmark.title}
        </a>
      </h3>

      {bookmark.note && <p className="text-mute">{bookmark.note}</p>}

      <div className="text-mute flex items-center gap-1">
        <LinkTypeIcon type={bookmark.type} />
        <span>{bookmark.domain}</span>
        <span>·</span>
        <span>
          {formatDistanceToNowStrict(parseISO(bookmark.created), {
            addSuffix: true,
            locale: tr,
          })}
        </span>
      </div>
    </article>
  );
}

function LinkTypeIcon({ type }: { type: string }) {
  const icons = {
    link: (
      <>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
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

  const icon = (child: any) => {
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

  if (type) return icon(icons[type as keyof typeof icons]);
  return icon(icons.link);
}

export default BookmarkCard;
