"use client";

import cx from "@/lib/cx";
import { useSelectedLayoutSegment } from "next/navigation";

export default function BgColor() {
  const segment = useSelectedLayoutSegment();

  return (
    <span
      className={cx(
        "block h-96 w-screen",
        "absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/4",
        "rounded-full blur-3xl",
        "bg-zinc-500/5", // home
        segment === "videos" && "bg-amber-500/5",
        segment === "photos" && "bg-orange-500/5",
        segment === "post" && "bg-purple-500/5",
        segment === "tools" && "bg-lime-500/5",
        segment === "bookmarks" && "bg-pink-500/5",
      )}
    />
  );
}
