import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "./post",
  include: "*.mdx",
  schema: (z) => ({
    date: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    tweetUrl: z.string().optional(),
    draft: z.boolean().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
