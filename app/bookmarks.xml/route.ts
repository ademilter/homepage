import { ILink } from "@/types";
import Raindrop from "@/lib/raindrop";
import { format, startOfYear } from "date-fns";
import { Feed } from "feed";

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
  const collections: ILink[] = await raindrop.getBookmark({
    search: `created:>${firstPostDate}`,
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
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=21600", // cache 1 days, revalidate 6 hours
    },
  });
}
