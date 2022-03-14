import useLocalStorage from "../hooks/useLocalStorage";
import slugify from "@sindresorhus/slugify";
import IconPlay from "./icons/play";

export default function VideoRow({ title, url, itemsCount }) {
  const [check, setCheck] = useLocalStorage(slugify(title), false);

  return (
    <div className="group flex items-center gap-3 py-3 transition dark:text-white hover:text-red-600 dark:hover:text-red-400">
      <label className="flex items-center justify-center w-5 h-5 border border-gray-300 rounded shadow-sm text-gray-900 dark:border-gray-600 dark:text-gray-200">
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
        <span className="font-semibold">{title}</span>
      </a>

      {itemsCount > -1 && (
        <span className="text-sm py-0.5 px-2 bg-gray-100 text-gray-500 rounded dark:bg-gray-800 dark:text-gray-500">
          {`${itemsCount} Videos`}
        </span>
      )}

      {/*<IconPlay className="opacity-30 group-hover:opacity-100" />*/}
    </div>
  );
}
