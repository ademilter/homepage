import { NextRequest } from "next/server";
import { serve } from "@upstash/qstash/nextjs";
import { Index } from "@upstash/vector";
import { format, startOfYesterday, startOfToday, startOfWeek } from "date-fns";
import { ILink } from "@/types";

type Metadata = ILink;
const index = new Index<Metadata>();

export const POST = async (req: NextRequest) => {
  const { secret } = await req.json();

  if (secret !== process.env.WORKFLOW_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const handler = serve(async (context) => {
    const bookmarks = await context.call<{ items: ILink[] }>(
      "get-bookmarks",
      [
        "https://api.raindrop.io/rest/v1/raindrops/15611214",
        "?perpage=2",
        "&page=0",
        "&sort=-created",
        `&search=created:>${format(startOfYesterday(), "yyyy-MM-dd")}`,
        // ` search=created:<${format(startOfToday(), "yyyy-MM-dd")}`,
      ].join(""),
      "GET",
      undefined,
      {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.RAINDROP_CLIENT_SECRET}`,
      },
    );

    const saveBookmarks = await context.run("save-bookmarks", async () => {
      if (bookmarks.items.length === 0) {
        return null;
      }

      const data = bookmarks.items.map((o: ILink) => ({
        id: o._id,
        data: o.excerpt,
        metadata: {
          _id: o._id,
          type: o.type,
          created: o.created,
          title: o.title,
          link: o.link,
          excerpt: o.excerpt,
          domain: o.domain,
          tags: o.tags,
          cover: o.cover,
          media: o.media,
          note: o.note,
        },
      }));

      return index.upsert<Metadata>(data);
    });
  });

  return await handler(req);
};

export const GET = async (req: NextRequest) => {
  // moveToVectorFromRaindrop();
  return new Response("OK");
};

async function moveToVectorFromRaindrop() {
  const getBookmarks = async (perPage = 50, page = 0) => {
    let url = new URL(`/rest/v1/raindrops/15611214`, "https://api.raindrop.io");
    url.searchParams.set("perpage", perPage.toString());
    url.searchParams.set("page", page.toString());

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RAINDROP_CLIENT_SECRET}`,
      },
    });

    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (data.items.length === perPage) {
      return data.items.concat(await getBookmarks(50, page + 1));
    } else {
      return data.items;
    }
  };

  const bookmarks = await getBookmarks();
  const data = bookmarks.map((o) => ({
    id: o._id,
    data: o.excerpt || o.title,
    metadata: {
      _id: o._id,
      type: o.type,
      created: o.created,
      title: o.title,
      link: o.link,
      excerpt: o.excerpt,
      domain: o.domain,
      tags: o.tags,
      cover: o.cover,
      media: o.media,
      note: o.note,
    },
  }));

  console.log(data.length);

  await index.upsert<Metadata>(data.slice(0, 500));
  await index.upsert<Metadata>(data.slice(500));
}
