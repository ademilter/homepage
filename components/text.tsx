import React from "react";
import cx from "classnames";

export interface ITextProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  size?: "small" | "normal" | "large" | "pageTitle" | "sectionTitle";
  dim?: 1 | 2 | 3;
  children: React.ReactNode;
}

const Text: React.FC<ITextProps> = ({
  as = "span",
  size = "normal",
  dim,
  children,
  className,
  ...props
}: ITextProps) => {
  const sizes = {
    small: "text-sm",
    normal: "",
    large: "text-xl",
    pageTitle: "text-2xl leading-snug",
    sectionTitle: "text-2xl leading-snug",
  };

  const dims = {
    1: "opacity-70 dark:opacity-60",
    2: "opacity-60 dark:opacity-50",
  };

  return React.createElement(
    as,
    { className: cx(sizes[size], dims[dim], className), ...props },
    children
  );
};

export default Text;
