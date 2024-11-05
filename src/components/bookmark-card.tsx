"use client";

import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import { ILink } from "@/types";

function BookmarkCard({ bookmark }: { bookmark: ILink; score?: number }) {
  const image = bookmark.media[0]?.link;

  return (
    <article className="flex items-center gap-6 rounded-xl bg-white px-4 py-3 shadow-sm sm:px-8 sm:py-6">
      {image && (
        <img
          className="shring-0 order-1 hidden aspect-[960/576] w-32 rounded-xl object-cover sm:block"
          src={image}
          alt={bookmark.title}
        />
      )}

      <div className="grow">
        <h3 className="line-clamp-1 font-semibold">
          <a href={bookmark.link} className="text-primary">
            {bookmark.title}
          </a>
        </h3>

        <div className="text-mute mt-0.5 flex items-center gap-1">
          <span>{bookmark.domain}</span>
          <span>·</span>
          <span>
            {formatDistanceToNowStrict(parseISO(bookmark.created), {
              addSuffix: true,
              locale: tr,
            })}
          </span>
        </div>

        {bookmark.note && <p className="mt-2">{bookmark.note}</p>}
      </div>
    </article>
  );
}

export default BookmarkCard;
