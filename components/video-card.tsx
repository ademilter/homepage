import useLocalStorage from "../hooks/useLocalStorage";
import slugify from "@sindresorhus/slugify";
import cx from "classnames";
// import IconPlay from "./icons/play";

export default function VideoCard({ title, url, itemsCount }) {
  const [check, setCheck] = useLocalStorage(slugify(title), false);

  return (
    <div
      className={cx(
        "group flex items-center gap-3 py-3 transition hover:text-red-600 dark:text-white dark:hover:text-red-400",
        check ? "opacity-50" : ""
      )}
    >
      <label className="flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-zinc-300 text-zinc-900 shadow-sm dark:border-zinc-600 dark:text-zinc-200">
        <input
          className="pointer-events-none absolute opacity-0"
          type="checkbox"
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
        />
        {check ? "✓" : ""}
      </label>

      <a href={url} className="flex-grow">
        <span className={cx("font-semibold")}>{title}</span>
      </a>

      {itemsCount > -1 && (
        <span className="rounded bg-zinc-100 py-0.5 px-2 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
          {`${itemsCount} Videos`}
        </span>
      )}

      {/*<IconPlay className="opacity-30 group-hover:opacity-100" />*/}
    </div>
  );
}
