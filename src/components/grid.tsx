import React from "react";
import cx from "@/lib/cx";

interface GridProps extends React.ComponentProps<"section"> {}

export function Grid({ children, className }: GridProps) {
  return (
    <section className={cx("grid grid-cols-6", className)}>{children}</section>
  );
}

interface GridHeadProps extends React.ComponentProps<"div"> {}

export function GridHead({ children, className }: GridHeadProps) {
  return <div className={cx("", className)}>{children}</div>;
}

interface GridContentProps extends React.ComponentProps<"div"> {}

export function GridContent({ children, className }: GridContentProps) {
  return <div className={cx("col-span-4", className)}>{children}</div>;
}
