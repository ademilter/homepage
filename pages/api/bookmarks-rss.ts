import type { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { META } from "@/lib/helper";
import Raindrop from "@/lib/raindrop";
import { format } from "date-fns";

async function getData() {
  const now = new Date();
  const date = format(now, "yyyy-MM-dd");

  const raindrop = new Raindrop(date);
  const data = await raindrop.getBookmarks();

  return data;
}

async function generateFeed(format: "xml" | "json") {
  const siteURL = process.env.VERCEL_URL ?? META.url;
  const date = new Date();

  const author = {
    name: META.name,
    email: META.email,
    link: META.url,
  };

  const feed = new Feed({
    title: META.title,
    description: META.description,
    author: author,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${META.name}`,
    updated: date, // today's date
    // generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/bookmarks/rss.xml`,
      json: `${siteURL}/bookmarks/rss.json`,
    },
  });

  const data = await getData();

  data.forEach((bookmark) => {
    feed.addItem({
      title: bookmark.title,
      description: bookmark.excerpt,
      id: bookmark.id,
      link: bookmark.link,
      content: bookmark.excerpt,
      author: [author],
      contributor: [author],
      image: bookmark.cover,
      date: new Date(bookmark.created),
    });
  });

  if (format === "xml") {
    return feed.rss2();
  }

  return feed.json1();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { format } = req.query;

    if (format === "xml") {
      const result = await generateFeed("xml");

      res.status(200)
        .setHeader("Content-Type", "text/xml")
        .send(result);

      return;
    }

    if (format === "json") {
      const result = await generateFeed("json");

      res.status(200)
        .setHeader("Content-Type", "application/json")
        .send(result);

      return;
    }

    res.status(404).send("Not found");
  } catch (err) {
    console.error("error when generating rss:", err);
    res.status(500).json({ error: "failed to load data" });
  }
}
