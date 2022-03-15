import React from "react";
import A from "components/a";
import commaNumber from "comma-number";

function MetricCard({ children, href = "", data, prefix = "" }) {
  return (
    <div
      className="
      border border-gray-200 rounded-xl p-4
      dark:border-gray-700"
    >
      {href ? (
        <A href={href} blank>
          {children}
        </A>
      ) : (
        children
      )}
      <p className="mt-1 text-3xl font-bold spacing-sm text-highlight">
        {prefix}
        {commaNumber(data)}
      </p>
    </div>
  );
}

export default MetricCard;
