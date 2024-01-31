import { motion } from "framer-motion";
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
        "grid grid-cols-3 items-center rounded-3xl bg-zinc-100 p-1 sm:rounded-full dark:bg-zinc-800",
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
              "relative grow select-none rounded-full bg-transparent px-3 py-2",
              "hover:bg-zinc-200 dark:hover:bg-zinc-900",
              buttonProps?.className,
            )}
          >
            {isActive && (
              <motion.span
                layoutId="bg"
                className="absolute left-0 top-0 h-full w-full rounded-full bg-white dark:bg-zinc-900 dark:text-zinc-100"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 50,
                  mass: 2,
                }}
              />
            )}

            <span
              className={cx(
                "relative z-10 font-medium",
                isActive ? "" : "opacity-60",
              )}
            >
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}
