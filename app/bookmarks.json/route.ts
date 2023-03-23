import { ILink } from "@/types";
import Raindrop from "@/lib/raindrop";
import { format, startOfYear } from "date-fns";

export async function GET() {
  const firstPostDate = format(startOfYear(new Date()), "yyyy-MM-dd");
  const raindrop = new Raindrop();
  const collections: ILink[] = await raindrop.getBookmark({
    search: `created:>${firstPostDate}`,
  });

  return new Response(JSON.stringify(collections), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=21600", // cache 1 days, revalidate 6 hours
    },
  });
}
