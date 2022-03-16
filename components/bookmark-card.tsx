import A from "components/a";
import IconUp from "components/icons/up";
import type { Bookmark } from "types/Bookmark";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";
import useSWR, { useSWRConfig } from "swr";

function BookmarkCard({
  bookmark,
  vote,
}: {
  bookmark: Bookmark;
  vote: boolean;
}) {
  const path = `/api/bookmark/vote/${bookmark._id}`;
  const { mutate } = useSWRConfig();
  const { data = { count: 0 } } = useSWR(vote ? path : null);

  const onVote = async () => {
    await fetch(path, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await mutate(path);
  };

  return (
    <article className="flex items-center space-x-6">
      {vote && (
        <button
          className="
        flex-shrink-0 flex flex-col items-center justify-center border border-gray-300 w-10 h-12 rounded hover:bg-gray-100
        dark:border-gray-700 dark:hover:bg-gray-800"
          onClick={onVote}
        >
          <IconUp />
          <span className="-mt-1 font-bold text-sm">{data?.count || 0}</span>
        </button>
      )}

      <div>
        <h3 className="text-lg leading-6 font-bold text-highlight">
          <A href={bookmark.link} blank>
            {bookmark.title}
          </A>
        </h3>

        <div className="mt-1 flex items-center space-x-2 text-gray-500">
          <span>{bookmark.domain}</span>
          <span className="opacity-50">•</span>
          <span>
            {formatDistanceToNowStrict(parseISO(bookmark.created), {
              addSuffix: true,
              locale: tr,
            })}
          </span>
        </div>
      </div>
    </article>
  );
}

export default BookmarkCard;
