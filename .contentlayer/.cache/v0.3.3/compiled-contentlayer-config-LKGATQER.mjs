// contentlayer.config.js
import { defineDocumentType, makeSource, defineNestedType } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
var Color = defineNestedType(() => ({
  name: "Color",
  fields: {
    text: { type: "string", default: "#000000" },
    bg: { type: "string", default: "#000000" },
    darkText: { type: "string", default: "#000000" },
    darkBg: { type: "string", default: "#000000" }
  }
}));
var Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string", required: true },
    color: { of: Color }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    collection: { type: "string" },
    tags: { type: "list", of: Tag },
    img: { type: "string" }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LKGATQER.mjs.map
