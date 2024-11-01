import React from "react";
import cx from "@/lib/cx";

export interface ISubTitleProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

const SubTitle: React.FC<ISubTitleProps> = ({
  className,
  ...props
}: ISubTitleProps) => {
  return <h3 className={cx("text-mute", className)} {...props} />;
};

export default SubTitle;
