import type { ITool } from "@/types";
import cx from "@/lib/cx";

export default function ToolCard({ tool }: { tool: ITool }) {
  const { brand, name, favorite, comment } = tool.fields;

  return (
    <article className="relative grid gap-1 py-4 md:py-6">
      <h3 className="shine text-base font-semibold">
        <span className="">{brand ? brand : "-"}</span>{" "}
        <span className="">{name}</span>
      </h3>

      <p className="">{comment}</p>

      <span
        className={cx(
          "absolute right-2 top-6",
          favorite ? "text-amber-300" : "opacity-20",
        )}
      >
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
      </span>
    </article>
  );
}
