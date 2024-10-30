import { Tool } from "@content";
import Image from "next/image";

export default function ToolCard({ tool }: { tool: Tool }) {
  const { images, brand, name, definition, content } = tool;

  return (
    <article className="flex items-start gap-6 border-b border-b-zinc-200 py-4 sm:py-8 dark:border-b-zinc-800">
      <div className="grow">
        <h6 className="block font-mono text-sm tracking-wider uppercase opacity-50 dark:opacity-40">
          {definition}
        </h6>

        <h3 className="mt-1 font-semibold">
          <span className="">{brand}</span> <span className="">{name}</span>
        </h3>

        <p className="mt-1 opacity-70 dark:opacity-60">{content}</p>
      </div>

      {images && (
        <Image
          width={600}
          height={600}
          src={images}
          alt={name}
          className="size-24 rounded-2xl bg-zinc-50 object-contain sm:size-32"
        />
      )}

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
