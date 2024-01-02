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
        "flex items-center gap-6 px-6 py-5",
        "rounded-lg no-underline transition",
        "rounded-lg bg-yellow-100 text-yellow-900 transition-all",
        "hover:text-yellow-950",
        "dark:bg-yellow-300/10 dark:text-yellow-200",
        "dark:hover:text-yellow-50",
        className,
      )}
    >
      <span className="grow">
        Ücretsiz yayınladığım içerikler için teşekkür etmek istersen kahve
        ısmarlayabilirsin
      </span>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black/10">
        <Buymeacoffee />
      </span>
    </BaseLink>
  );
}
