"use client";

import Claps from "@upstash/claps";

export default function ClapsButton({ url }) {
  return <Claps replyUrl={url} />;
}
