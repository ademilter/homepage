import Raindrop from "@/lib/raindrop";
import { format, startOfYear } from "date-fns";
import { META } from "@/lib/helper";

export async function getServerSideProps({ res }) {
  const date = new Date();
  const author = {
    name: META.name,
    email: META.email,
    link: META.url,
  };

  const firstPostDate = format(startOfYear(2021), "yyyy-MM-dd");
  const raindrop = new Raindrop({ createdAt: firstPostDate });
  const _data = await raindrop.getBookmarks();

  const data = _data.map(
    ({ _id, created, type, title, tags, link, excerpt, domain, cover }) => {
      return {
        id: _id,
        created,
        type,
        title,
        tags,
        link,
        excerpt,
        domain,
        cover,
      };
    }
  );

  const revalidate = 60 * 60 * 2; // 2 hours

  res.setHeader("Content-Type", "text/json");
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=1200, stale-while-revalidate=${revalidate}`
  );

  res.write(
    JSON.stringify({
      title: META.title,
      description: META.description,
      updated: date,
      copyright: `All rights reserved ${date.getFullYear()}, ${META.name}`,
      author: author,
      data,
    })
  );

  res.end();

  return {
    props: {},
  };
}

export default function RssJson() {
  return null;
}
