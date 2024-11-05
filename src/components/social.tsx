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
      className={cx(
        "inline-flex size-10 items-center justify-center gap-1 px-2",
        "bg-default/10 rounded-xl !no-underline",
        "hover:!bg-default hover:!text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Social({ children }: { children?: React.ReactNode }) {
  return <div className="inline-flex items-center gap-2">{children}</div>;
}
