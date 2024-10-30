import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "./data/post",
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

const tools = defineCollection({
  name: "tools",
  directory: "./data/tool",
  include: "*.mdx",
  schema: (z) => ({
    brand: z.string(),
    name: z.string(),
    definition: z.string(),
    favorite: z.boolean(),
    category: z.string(),
    images: z.string().optional(),
    order: z.number().optional(),
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
  collections: [posts, tools],
});
