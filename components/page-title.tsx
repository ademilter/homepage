import React, { ReactNode } from "react";
import cn from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

function PageTitle({ children, className, ...props }: Props) {
  return (
    <p
      className={cn("text-highlight text-2xl leading-snug", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export default PageTitle;
