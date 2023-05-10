import React from "react";
import BaseLink from "@/components/link";
import cx from "@/lib/cx";
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
        "text-amber-900 transition-all",
        "hover:bg-amber-200 hover:no-underline",
        "dark:bg-zinc-700 dark:text-zinc-200",
        "dark:hover:bg-zinc-600",
        className
      )}
    >
      <span className="grow">
        Ücretsiz yayınladığım içerikler için teşekkür etmek istersen kahve
        ısmarlayabilirsin
      </span>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-600">
        <Buymeacoffee />
      </span>
    </BaseLink>
  );
}
