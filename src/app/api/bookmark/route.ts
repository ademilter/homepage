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

  const hashIP = getIPHash(req);
  let voted = null;

  if (Boolean(hashIP)) {
    voted = await redis.get(["deduplicate", hashIP, url].join(":"));
  }

  const score = await redis.get(["bookmark", "up", encodeURI(url)].join(":"));
  return NextResponse.json({ score, voted: !!voted }, { status: 202 });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  let url: string | undefined = undefined;

  if ("url" in body) {
    url = body.url;
  }

  if (!url) {
    return new NextResponse("URL not found", { status: 400 });
  }

  const hashIP = getIPHash(req);

  if (Boolean(hashIP)) {
    const isNew = await redis.set(
      ["deduplicate", hashIP, url].join(":"),
      true,
      {
        nx: true,
        // ex: 24 * 60 * 60,
      },
    );

    if (!isNew) {
      return new NextResponse(null, { status: 202 });
    }
  }

  const score = await redis.incr(["bookmark", "up", url].join(":"));
  return NextResponse.json({ score, voted: true }, { status: 202 });
}

// https://github.com/chronark/chronark.com/blob/main/pages/api/incr.ts
async function getIPHash(req: NextRequest): Promise<string | undefined> {
  const ip = req.ip;

  if (!ip) return undefined;

  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(ip),
  );

  const hash = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hash;
}
