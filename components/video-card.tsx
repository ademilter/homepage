import useLocalStorage from "../hooks/useLocalStorage";
import slugify from "@sindresorhus/slugify";
import cx from "classnames";
// import IconPlay from "./icons/play";

export default function VideoCard({ title, url, itemsCount }) {
  const [check, setCheck] = useLocalStorage(slugify(title), false);

  return (
    <div
      className={cx(
        "group flex items-center gap-3 py-3 transition dark:text-white hover:text-red-600 dark:hover:text-red-400",
        check ? "opacity-50" : ""
      )}
    >
      <label className="flex items-center justify-center w-5 h-5 border border-zinc-300 rounded shadow-sm text-zinc-900 dark:border-zinc-600 dark:text-zinc-200 cursor-pointer">
        <input
          className="absolute opacity-0 pointer-events-none"
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
        <span className="text-sm py-0.5 px-2 bg-zinc-100 text-zinc-500 rounded dark:bg-zinc-800 dark:text-zinc-500">
          {`${itemsCount} Videos`}
        </span>
      )}

      {/*<IconPlay className="opacity-30 group-hover:opacity-100" />*/}
    </div>
  );
}
