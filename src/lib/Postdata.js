import { allPosts } from "contentlayer/gererated";

export const getCollection = (post) => {
    return allPosts
        .filter((i) => i._raw.sourceFilePath.includes("/index.mdx"))
        .map((item) => ({
            ...item,
            posts: allPosts
                .filter((i) => i._raw.sourceFilePath.includes(item._raw.flattenedPath))
                .filter((i) => !i._raw.sourceFilePath.includes("/index.mdx"))
                .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date))),
        }))
        .find((i) => i._raw.sourceFileDir.includes(post._raw.sourceFileDir));
};
