"use server";

import { Index } from "@upstash/vector";

const index = new Index();

export async function fetchBookmark(prompt: string) {
  return await index.query({
    data: prompt,
    topK: 10,
    includeMetadata: true,
  });
}
