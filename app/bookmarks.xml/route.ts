import { ILink } from "@/types/index";
import Raindrop from "@/lib/raindrop";
import { format, startOfYear } from "date-fns";
import { Feed } from "feed";

export const revalidate = 86400;

export async function GET() {
  const siteURL = "https://ademilter.com";
  const date = new Date();
  const author = {
    name: "Adem ilter",
    email: "ademikter@gmail.com",
    link: siteURL,
  };

  const firstPostDate = format(startOfYear(new Date()), "yyyy-MM-dd");
  const raindrop = new Raindrop();
  const collections: ILink[] = await raindrop.multipleRaindrops({
    id: 15611214,
    search: `created:>${firstPostDate}`,
    allData: true,
  });

  const feed = new Feed({
    title: "Adem ilter",
    description: "Adem ilter'in yerimleri",
    author: author,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/icons/icon-favicon-16x16.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/bookmarks/rss.xml`,
      json: `${siteURL}/bookmarks/rss.json`,
    },
  });

  collections.forEach((bookmark: ILink) => {
    feed.addItem({
      guid: bookmark.link,
      date: new Date(bookmark.created),
      title: bookmark.title,
      link: bookmark.link,
      description: bookmark.excerpt,
      content: bookmark.excerpt,
      author: [author],
      contributor: [author],
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "s-maxage=86400", // 1 days
    },
  });
}
