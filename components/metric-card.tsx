import React from 'react';
import A from 'components/a';
import commaNumber from 'comma-number';

function MetricCard({ children, href, data }) {
  return (
    <div
      className="
      border border-gray-200 rounded-xl p-4
      dark:border-gray-700"
    >
      <A href={href} blank>
        <div>{children}</div>
      </A>
      <p className="mt-1 text-3xl font-bold spacing-sm text-highlight">
        {commaNumber(data)}
      </p>
    </div>
  );
}

export default MetricCard;
