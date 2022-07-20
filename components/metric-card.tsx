import React from "react";
import A from "components/a";
import Text from "components/text";
import commaNumber from "comma-number";

function MetricCard({ children, href = "", data, prefix = "" }) {
  const Title = () => <Text dim={3}>{children}</Text>;

  return (
    <div
      className="
      rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
    >
      {href ? (
        <A href={href}>
          <Title />
        </A>
      ) : (
        <Title />
      )}
      <Text
        as="p"
        className="spacing-sm mt-1 text-3xl font-semibold slashed-zero"
      >
        {prefix}
        {commaNumber(data)}
      </Text>
    </div>
  );
}

export default MetricCard;
