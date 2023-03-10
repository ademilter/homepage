import React from "react";
import BaseLink from "@/components/link";
import cx from "classnames";
import Buymeacoffee from "@/components/icons/buymeacoffee";

interface ThankYouProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export default function ThankYou({ className }: ThankYouProps) {
  return (
    <BaseLink
      href="https://www.buymeacoffee.com/ademilter"
      className={cx(
        "flex items-center gap-6 rounded-lg bg-amber-50 py-4 px-6 md:-mx-6",
        "text-amber-900 transition-colors",
        "hover:bg-amber-100 hover:no-underline",
        "dark:bg-amber-900 dark:text-amber-100",
        "dark:hover:bg-amber-800 dark:hover:text-amber-50",
        className
      )}
    >
      <span className="shrink-0">
        <Buymeacoffee size={32} />
      </span>
      <span className="grow">
        Ücretsiz olarak yayınladığım içerikler için teşekkür etmek istersen
        kahve ısmarlayabilirsin 💛
      </span>
    </BaseLink>
  );
}
