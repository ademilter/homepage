import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Note = defineDocumentType(() => ({
  name: "Note",
  contentType: "mdx",
  filePathPattern: `notes/*.mdx`,
  fields: {
    date: { type: "date", required: true },
    title: { type: "string", required: true },
    tags: { type: "json", required: true },
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
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypePrism,
        {
          // showLineNumbers: true,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
