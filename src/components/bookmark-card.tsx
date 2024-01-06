import Link from "@/components/link";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import { ILink } from "@/types";
import cx from "@/lib/cx";

function BookmarkCard({ bookmark }: { bookmark: ILink }) {
  return (
    <article className="border-b border-b-zinc-200 py-4 md:py-6 dark:border-b-zinc-800">
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
    </article>
  );
}

export default BookmarkCard;
