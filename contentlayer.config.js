import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string" },
        description: { type: "string", required: true },
        collection: { type: "string" },
        tags: { type: "list", of: { type: "string" } },
    },
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
});
