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
  const Title = () => <span className="opacity-50">{children}</span>;

  return (
    <div
      className="
      border-zinc-150 rounded-lg border bg-white p-4 shadow-sm dark:border-zinc-700"
    >
      {href ? (
        <BaseLink className="no-underline" href={href}>
          <Title />
        </BaseLink>
      ) : (
        <Title />
      )}
      <div className="shine spacing-sm mt-1 text-3xl font-semibold opacity-90">
        {prefix}
        {Number(data).toLocaleString()}
      </div>
    </div>
  );
}

export default MetricCard;
