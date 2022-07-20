import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/*.mdx`,
  fields: {
    date: { type: "date", required: true },
    title: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => {
        return `https://ademilter.com/blog/${doc.slug}`;
      },
    },
    readingTime: {
      type: "json",
      resolve: (doc) => {
        return readingTime(doc.body.raw);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrism],
  },
});
