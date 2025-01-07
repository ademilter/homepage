import React from "react";
import cx from "@/lib/cx";

export function SocialButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      className={cx(className)}
    >
      {children}
    </a>
  );
}

export function Social({ children }: { children?: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}
