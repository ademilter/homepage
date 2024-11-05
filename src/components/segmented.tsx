import cx from "@/lib/cx";
import React from "react";

export default function Segmented({
  data = [],
  selected,
  onChange = () => {},
  className = "",
  buttonProps = {},
}: {
  data: string[];
  selected: undefined | string;
  onChange: (value: string) => void;
  className?: string;
  buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
}) {
  if (!data.length) return null;

  return (
    <div className={cx("flex flex-wrap gap-1", className)}>
      {data.map((item) => {
        const isActive = item === selected;

        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            {...buttonProps}
            className={cx(
              "text-mute relative h-10 rounded-xl bg-transparent px-4 select-none",
              "cursor-pointer bg-zinc-200 hover:bg-zinc-300",
              isActive ? "!bg-default font-medium text-white" : "",
              buttonProps?.className,
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
