import type { NextApiRequest, NextApiResponse } from "next";
import youtube from "@/lib/youtube";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await youtube();
  const { subscriberCount, viewCount } = data;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    subscriberCount,
    viewCount,
  });
}
