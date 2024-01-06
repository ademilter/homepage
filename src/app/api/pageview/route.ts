import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const runtime = "edge";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  let slug: string | undefined = undefined;

  if ("slug" in body) {
    slug = body.slug;
  }

  if (!slug) {
    return new NextResponse("URL not found", { status: 400 });
  }

  const view = await redis.incr(["pageviews", slug].join(":"));
  return NextResponse.json({ view }, { status: 202 });
}
