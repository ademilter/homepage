import React from "react";
import cx from "@/lib/cx";
import IconBuyMeaCoffee from "@/components/icons/buymeacoffee";
import { ISupporter } from "@/types";
import { IconArrowUpRight } from "@tabler/icons-react";

interface ThankYouProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
  data: ISupporter[];
}

export default function ThankYou({ className, data }: ThankYouProps) {
  return (
    <div
      className={cx(
        "flex items-center gap-6 px-6 py-5",
        "rounded-xl no-underline",
        "bg-amber-100 text-amber-900",
        "dark:bg-amber-400/5 dark:text-amber-200",
        className,
      )}
    >
      <div className="grow">
        <p className="font-semibold">Bu ay kahve ısmarlayanlar;</p>
        <p className="flex flex-wrap gap-2 opacity-60">
          {data.map((supporter: ISupporter, index: number) => {
            return (
              <span key={supporter.transaction_id}>
                {supporter.supporter_name}
                {/*<span className="">({supporter.support_coffees})</span>*/}
                {index < data.length - 1 && <span>,</span>}
              </span>
            );
          })}
        </p>
      </div>

      <a
        href="https://www.buymeacoffee.com/ademilter"
        className={cx(
          "group/coffee p-3",
          "flex shrink-0 items-center justify-center gap-1",
          "rounded-full bg-white dark:bg-zinc-900",
          "hover:bg-opacity-30 hover:text-current",
        )}
      >
        <IconBuyMeaCoffee />
        <IconArrowUpRight
          size={20}
          className="opacity-50 transition group-hover/coffee:rotate-45 group-hover/coffee:opacity-100"
        />
      </a>
    </div>
  );
}
