import type { ITool } from "@/types";
import { IconHeartFilled } from "@tabler/icons-react";
import cx from "@/lib/cx";

export default function ToolCard({ tool }: { tool: ITool }) {
  const { brand, name, wtf, favorite, comment } = tool.fields;

  return (
    <article className="grid border-b border-b-zinc-200 py-4 sm:py-8 dark:border-b-zinc-800">
      <header>
        <h6 className="block font-mono text-sm uppercase tracking-wider opacity-50 dark:opacity-40">
          {wtf}
        </h6>
        <h3 className="mt-1 font-semibold">
          <span className="">{brand}</span> <span className="">{name}</span>
        </h3>
      </header>

      <p className="mt-1 opacity-70 dark:opacity-60">{comment}</p>

      {/*{favorite && (*/}
      {/*  <footer className="mt-2 flex items-center">*/}
      {/*    <span*/}
      {/*      className={cx(*/}
      {/*        "inline-flex select-none items-center gap-1 px-2 py-1 leading-none",*/}
      {/*        "rounded-lg text-xs font-medium uppercase tracking-wider",*/}
      {/*        "bg-pink-50 text-pink-700",*/}
      {/*        // "dark:bg-amber-200/10 dark:hover:bg-amber-200/20",*/}
      {/*      )}*/}
      {/*    >*/}
      {/*      <IconHeartFilled size={14} className="opacity-80" />*/}
      {/*      Favori Ürünüm*/}
      {/*    </span>*/}
      {/*  </footer>*/}
      {/*)}*/}
    </article>
  );
}
