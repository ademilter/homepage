import type { ITool } from "@/types";
import cx from "@/lib/cx";

export default function ToolCard({ tool }: { tool: ITool }) {
  const { brand, name, wtf, favorite, comment } = tool.fields;

  return (
    <article className="relative flex items-center gap-6 border-b border-b-zinc-200 py-4 md:py-8 dark:border-b-zinc-800">
      <div className="grow">
        <span className="mb-1 block font-mono text-sm uppercase tracking-wider opacity-50 dark:opacity-40">
          {wtf}
        </span>
        <h3 className="font-semibold">
          <span className="">{brand}</span> <span className="">{name}</span>
        </h3>
        <p className="mt-1 opacity-70 dark:opacity-60">{comment}</p>
      </div>

      <span
        className={cx(
          "flex h-full min-h-10 w-10 shrink-0 items-center justify-center ",
          "rounded-lg text-amber-500 dark:text-amber-600",
          favorite ? "bg-amber-100" : "bg-zinc-100 dark:bg-zinc-800",
        )}
      >
        {favorite && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth="1.4"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
              fill="currentColor"
            />
          </svg>
        )}
      </span>
    </article>
  );
}
