import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const runtime = "edge";
export const revalidate = 3600;

export async function GET(req: NextRequest): Promise<NextResponse> {
  const params = req.nextUrl.searchParams;
  const url = params.get("url");

  if (!url) {
    return new NextResponse("URL not found", { status: 400 });
  }

  const score = await redis.get(["bookmark", "up", url].join(":"));
  return NextResponse.json({ score }, { status: 202 });
}
