"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import slugify from "@sindresorhus/slugify";
import cx from "@/lib/cx";

export default function VideoCard({ title, url, itemsCount }) {
  const [check, setCheck] = useLocalStorage(slugify(title), false);

  return (
    <article
      className={cx(
        "group flex items-start gap-3 py-3 transition",
        "hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400",
        check ? "opacity-50" : ""
      )}
    >
      <label className="mt-0.5 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded border border-zinc-300 text-zinc-900 shadow-sm dark:border-zinc-600 dark:text-zinc-200">
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

      <h5 className="shine grow font-medium">
        <a href={url}>{title}</a>
      </h5>

      {itemsCount > -1 && (
        <span
          className="shrink-0 whitespace-nowrap rounded bg-zinc-100
        px-2 py-0.5 text-sm text-zinc-500
        dark:bg-zinc-800 dark:text-zinc-500"
        >
          {`${itemsCount} videos`}
        </span>
      )}
    </article>
  );
}
