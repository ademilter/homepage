import React from "react";
import cx from "@/lib/cx";

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  size?: "default" | "large";
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({
  as = "div",
  size = "default",
  children,
  className,
  ...props
}: IContainerProps) => {
  const sizes = {
    default: "sm:max-w-[60ch]",
    large: "sm:max-w-[120ch]",
  };

  return React.createElement(
    as,
    {
      className: cx("mx-auto px-6", sizes[size], className),
      ...props,
    },
    children,
  );
};

export default Container;
