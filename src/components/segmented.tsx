import cx from "@/lib/cx";
import React from "react";

export default function Segmented({
  data = [],
  selected,
  onChange = () => {},
  className = "",
  fullWidth = false,
  buttonProps = {},
}: {
  data: string[];
  selected: undefined | string;
  onChange: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
  buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
}) {
  if (!data.length) return null;

  return (
    <div
      className={cx(
        "grid grid-cols-3 items-center gap-1 p-1",
        "bg-default/10 rounded-2xl",
        fullWidth ? "sm:flex" : "sm:inline-flex",
        className,
      )}
    >
      {data.map((item) => {
        const isActive = item === selected;

        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            {...buttonProps}
            className={cx(
              "text-mute relative h-9 grow rounded-xl bg-transparent px-3 select-none",
              "hover:bg-zinc-300",
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
