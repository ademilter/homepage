import Link from "@/components/link";
import type { IBookmark } from "@/types/index";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";

function BookmarkCard({ bookmark }: { bookmark: IBookmark }) {
  return (
    <article className="py-4">
      <h3 className="shine font-semibold">
        <Link href={bookmark.link}>{bookmark.title}</Link>
      </h3>

      <div className="mt-1 flex items-center space-x-2">
        <span>{bookmark.domain}</span>
        <span>•</span>
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
