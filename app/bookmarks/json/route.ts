import { ILink } from "@/types/index";
import Raindrop from "@/lib/raindrop";
import { format, startOfYear } from "date-fns";

export async function GET() {
  const firstPostDate = format(startOfYear(new Date()), "yyyy-MM-dd");
  const raindrop = new Raindrop();
  const collections: ILink[] = await raindrop.multipleRaindrops({
    id: 15611214,
    search: `created:>${firstPostDate}`,
    allData: true,
  });

  return new Response(JSON.stringify(collections), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=86400", // 1 days
    },
  });
}
