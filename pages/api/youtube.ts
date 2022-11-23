import type { NextApiRequest, NextApiResponse } from "next";
import youtube from "@/lib/youtube";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await youtube();
  const { subscriberCount, viewCount } = data;

  const _asd = await fetch("https://eu1-fun-dodo-31346.upstash.io/incr/asd", {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
    },
  });
  const asd = await _asd.json();
  console.log(asd);

  res.setHeader("Cache-Control", "s-maxage=7200, stale-while-revalidate");

  return res.status(200).json({
    subscriberCount,
    viewCount,
    asd,
  });
}
