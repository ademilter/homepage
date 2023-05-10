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
    default: "max-w-screen-sm mx-auto px-6",
    large: "max-w-screen-xl mx-auto px-6",
  };

  return React.createElement(
    as,
    { className: cx(sizes[size], className), ...props },
    children
  );
};

export default Container;
