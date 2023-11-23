import type { ITool } from "@/types";
import Rating from "@/components/rating";

export default function ToolCard({ tool }: { tool: ITool }) {
  const { brand, name, rating, comment } = tool.fields;

  return (
    <article className="border-t grid gap-2 border-black/5 dark:border-white/5 py-6">
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((rate) => {
          return <Rating key={rate} rate={rate} rating={rating} />;
        })}
      </div>

      <h3 className="text-base shine font-semibold">
        <span className="opacity-80">{brand ? brand : "-"}</span>{" "}
        <span className="">{name}</span>
      </h3>

      <p className="text-sm">{comment}</p>
    </article>
  );
}
