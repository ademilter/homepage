import React from "react";
import cx from "@/lib/cx";

export interface ITitleProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({
  as = "h2",
  children,
  className,
  ...props
}: ITitleProps) => {
  return React.createElement(
    as,
    { className: cx("shine text-2xl leading-snug", className), ...props },
    children
  );
};

export default Title;
