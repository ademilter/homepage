import React from "react";
import BaseLink from "@/components/link";

function MetricCard({
  children,
  href = "",
  data,
  prefix = "",
}: {
  children: React.ReactNode;
  href?: string;
  data: string | number;
  prefix?: string;
}) {
  const Title = () => (
    <span className="font-mono text-sm uppercase tracking-wider opacity-50 hover:opacity-100 dark:opacity-40">
      {children}
    </span>
  );

  return (
    <div
      className="
      rounded-lg border border-zinc-200 bg-white px-5 py-3 shadow-sm
      dark:border-zinc-700 dark:bg-zinc-800"
    >
      {href ? (
        <BaseLink className="no-underline" href={href}>
          <Title />
        </BaseLink>
      ) : (
        <Title />
      )}
      <div className="text-xl font-semibold">
        {prefix}
        {Number(data).toLocaleString()}
      </div>
    </div>
  );
}

export default MetricCard;
