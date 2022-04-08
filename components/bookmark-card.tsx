import A from "components/a";
import type { IBookmark } from "types/Bookmark";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";

function BookmarkCard({ bookmark }: { bookmark: IBookmark }) {
  return (
    <article className="py-4">
      <h3 className="font-semibold text-highlight">
        <A href={bookmark.link}>{bookmark.title}</A>
      </h3>

      <div className="mt-1 flex items-center space-x-2 text-zinc-500">
        <span>{bookmark.domain}</span>
        <span className="opacity-50">•</span>
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
