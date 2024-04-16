"use server";

import fs from "fs";
import RSS from "rss";
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

  const feedData = await raindrop.getBookmark({});

  const feedOptions = {
    title: "Bookmarks | Adem ilter",
    description:
      "İnternette gezinirken beğendiğim ve beni takip edenlerin de beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.",
    feed_url: "https://ademilter.com/feed.xml",
    site_url: "https://ademilter.com",
  };

  const feed = new RSS(feedOptions);

  feedData.map((item) => {
    feed.item({
      title: item.title,
      description: `<img src="${item.cover}" /> ${item.note.length > 1 ? `<br/> Kendi Düşüncelerim: ${item.note}` : ""}`,
      url: item.link,
      author: item.domain,
      date: new Date(item.created),
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));

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
