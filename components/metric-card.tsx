import React from "react";
import A from "components/a";
import commaNumber from "comma-number";

function MetricCard({ children, href = "", data, prefix = "" }) {
  return (
    <div
      className="
      rounded-xl border border-zinc-200 p-4
      dark:border-zinc-700"
    >
      {href ? <A href={href}>{children}</A> : children}
      <p className="spacing-sm text-highlight mt-1 text-3xl font-bold">
        {prefix}
        {commaNumber(data)}
      </p>
    </div>
  );
}

export default MetricCard;
