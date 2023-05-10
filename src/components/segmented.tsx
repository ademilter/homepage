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
  selected: string;
  onChange: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
  buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
}) {
  if (!data.length) return null;

  return (
    <div
      className={cx(
        "items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-800",
        fullWidth ? "flex" : "inline-flex",
        className
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
              "relative grow rounded-full bg-transparent px-4 py-1",
              buttonProps?.className
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

            <span className={cx("relative z-10", isActive ? "shine" : "")}>
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}
