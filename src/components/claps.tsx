"use client";

import Claps from "@upstash/claps";

export default function ClapsButton({ url }: { url: string }) {
  return <Claps replyUrl={url} />;
}
