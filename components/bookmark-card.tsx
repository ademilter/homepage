import A from "components/a";
import IconUp from "components/icons/up";
import type { Bookmark } from "types/Bookmark";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";
import useFetch from "use-http";

function BookmarkCard({
  bookmark,
  vote,
}: {
  bookmark: Bookmark;
  vote: boolean;
}) {
  const apiPath = `bookmark/vote/${bookmark._id}`;
  const { data = { count: 0 } } = useFetch(apiPath, vote ? [] : null);
  const { patch, response } = useFetch(apiPath);

  const onVote = async () => {
    await patch();
    if (!response.ok) alert(response.data.message);
  };

  return (
    <article className="flex items-center py-4 space-x-6">
      {vote && (
        <button
          className="
        flex-shrink-0 flex flex-col items-center justify-center border border-gray-200 w-10 h-12 rounded
        dark:border-gray-700
        transition duration-100 hover:shadow-md hover:-translate-y-0.5"
          onClick={onVote}
        >
          <IconUp />
          <span className="-mt-1 font-bold text-sm">{data?.count || 0}</span>
        </button>
      )}

      <div>
        <h3 className="font-semibold text-highlight">
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
