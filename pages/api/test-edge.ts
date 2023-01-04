import { type NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  // const result = await fetch(
  //   `https://api.raindrop.io/rest/v1/raindrops/${15611214}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${process.env.RAINDROP_CLIENT_SECRET}`,
  //     },
  //   }
  // );
  //
  // const data = await result.json();

  const _asd = await fetch("https://eu1-fun-dodo-31346.upstash.io/incr/asd", {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
    },
  });

  const asd = await _asd.json();

  if (!_asd.ok) {
    return new Response(
      JSON.stringify({ error: "Error retrieving subscribers" }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  return new Response(JSON.stringify({ asd }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=14400, stale-while-revalidate=7200",
    },
  });
}
