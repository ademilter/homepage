import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const runtime = "edge";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  let slug: string | undefined = undefined;
  let incr: boolean | undefined = false;

  if ("slug" in body) slug = body.slug;
  if ("incr" in body) incr = body.incr;

  if (!slug) {
    return new NextResponse("URL not found", { status: 400 });
  }

  let view: null | number = null;
  const key = ["pageviews", slug].join(":");

  if (incr) {
    view = await redis.incr(key);
  } else {
    view = await redis.get(key);
  }
  return NextResponse.json({ view }, { status: 202 });
}
