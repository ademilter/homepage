import Raindrop from "@/lib/raindrop";
import { format, startOfYear } from "date-fns";
import { META } from "@/lib/helper";
import { Feed } from "feed";
import ms from "ms";

export async function getServerSideProps({ res }) {
  const siteURL = process.env.VERCEL_URL ?? META.url;
  const date = new Date();
  const author = {
    name: META.name,
    email: META.email,
    link: META.url,
  };

  const firstPostDate = format(startOfYear(2021), "yyyy-MM-dd");
  const raindrop = new Raindrop(firstPostDate);
  const data = await raindrop.getBookmarks();

  const feed = new Feed({
    title: META.title,
    description: META.description,
    author: author,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${META.name}`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/bookmarks/rss.xml`,
      json: `${siteURL}/bookmarks/rss.json`,
    },
  });

  data.forEach((bookmark) => {
    feed.addItem({
      id: String(bookmark._id),
      date: new Date(bookmark.created),
      title: bookmark.title,
      link: bookmark.link,
      description: bookmark.excerpt,
      content: bookmark.excerpt,
      author: [author],
      contributor: [author],
      // image: bookmark.cover,
    });
  });

  const revalidate = ms("1h") / 1000;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=1200, stale-while-revalidate=${revalidate}`
  );

  res.write(feed.rss2());
  res.end();

  return {
    props: {},
  };
}

export default function BookmarksXml() {
  return null;
}
