import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";

export const Note = defineDocumentType(() => ({
  name: "Note",
  contentType: "mdx",
  filePathPattern: `notes/*.mdx`,
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
  documentTypes: [Note],
  mdx: {
    rehypePlugins: [rehypePrism],
  },
});
