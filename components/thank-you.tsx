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
        "flex items-center gap-6 rounded-lg bg-amber-100 px-6 py-5",
        "text-amber-900 transition-colors",
        "hover:bg-amber-100 hover:no-underline",
        "dark:bg-zinc-600 dark:text-zinc-100",
        "dark:hover:bg-amber-800 dark:hover:text-amber-50",
        className
      )}
    >
      <span className="grow">
        Ücretsiz yayınladığım içerikler için teşekkür etmek istersen kahve
        ısmarlayabilirsin
      </span>
      <span className="shrink-0 w-14 h-14 rounded-full bg-white dark:bg-zinc-700 flex items-center justify-center">
        <Buymeacoffee />
      </span>
    </BaseLink>
  );
}
