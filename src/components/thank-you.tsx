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
        "flex items-center gap-6 px-6 py-6 md:-mx-6",
        "rounded-xl no-underline transition",
        "bg-amber-100 text-amber-900 transition-all",
        "hover:text-amber-950",
        "dark:bg-amber-300/10 dark:text-amber-200",
        "dark:hover:text-amber-50",
        className,
      )}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black/10">
        <Buymeacoffee />
      </span>
      <span className="grow">
        Ücretsiz yayınladığım içerikler için teşekkür etmek istersen kahve
        ısmarlayabilirsin 🙌
      </span>
    </BaseLink>
  );
}
