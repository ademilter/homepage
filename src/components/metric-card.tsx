import React, { ReactNode } from "react";
import cx from "@/lib/cx";

function MetricCard({
  children,
  href = "",
  data,
  prefix = "",
}: {
  children: ReactNode;
  href?: string;
  data: string | number | ReactNode;
  prefix?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        "flex flex-col gap-1 px-5 py-3 no-underline",
        "rounded-xl shadow-sm",
        "border border-zinc-200 hover:border-0 dark:border-zinc-700",
        "bg-white hover:bg-blue-600 dark:bg-zinc-800",
        "hover:text-white dark:hover:text-zinc-50",
        href ? "" : "pointer-events-none",
      )}
    >
      <h5 className="font-mono text-sm uppercase tracking-wider opacity-50 dark:opacity-40">
        {children}
      </h5>
      <div className="text-xl font-semibold leading-none">
        {prefix}
        {data}
      </div>
    </a>
  );
}

export default MetricCard;
