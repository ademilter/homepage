"use server";

import { addYears, format, startOfYear } from "date-fns";
import Raindrop from "@/lib/raindrop";
import { ILink, ISupporter } from "@/types";
import BuyMeCoffee from "@/lib/buymecoffee";

export async function fetchBookmark(year: Date): Promise<{
  count: number;
  data: ILink[];
  year: string;
}> {
  const dateStartOfYear = startOfYear(year);
  const dateEndOfYear = addYears(dateStartOfYear, 1);

  const startDateByFormat = format(dateStartOfYear, "yyyy-MM-dd");
  const endDateByFormat = format(dateEndOfYear, "yyyy-MM-dd");

  const raindrop = new Raindrop();
  const data = await raindrop.getBookmark({
    search: `created:>${startDateByFormat} created:<${endDateByFormat}`,
  });

  return {
    data,
    count: data.length,
    year: format(new Date(), "yyyy"),
  };
}

export async function fetchSupporter(): Promise<ISupporter[]> {
  const buyMeCoffee = new BuyMeCoffee();
  const coffees = await buyMeCoffee.getSupporters();
  return coffees.filter((o) => o.support_visibility);
}
