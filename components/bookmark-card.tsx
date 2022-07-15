import A from "components/a";
import type { IBookmark } from "types/Bookmark";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";
import Text from "components/text";

function BookmarkCard({ bookmark }: { bookmark: IBookmark }) {
  return (
    <article className="py-4">
      <Text as="h3" className="font-semibold">
        <A href={bookmark.link}>{bookmark.title}</A>
      </Text>

      <div className="mt-1 flex items-center space-x-2">
        <Text dim={2}>{bookmark.domain}</Text>
        <Text dim={2}>•</Text>
        <Text dim={2}>
          {formatDistanceToNowStrict(parseISO(bookmark.created), {
            addSuffix: true,
            locale: tr,
          })}
        </Text>
      </div>
    </article>
  );
}

export default BookmarkCard;
