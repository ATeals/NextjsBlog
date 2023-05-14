import { allPosts } from "contentlayer/gererated";

const getPost = (url) => {
    return allPosts.find((p) => p._raw.flattenedPath === url);
};

const getPostAll = () => {
    return allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx"));
};

const getCollection = (post) => {
    return allPosts
        .filter((i) => i._raw.sourceFilePath.includes("/index.mdx"))
        .map((item) => ({
            ...item,
            key: item._id,
            posts: allPosts
                .filter((i) => i._raw.sourceFilePath.includes(item._raw.flattenedPath))
                .filter((i) => !i._raw.sourceFilePath.includes("/index.mdx"))
                .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date))),
        }))
        .find((i) => i._raw.sourceFileDir.includes(post._raw.sourceFileDir));
};

const getCollectionAll = () => {
    return allPosts
        .filter((i) => i._raw.sourceFilePath.includes("/index.mdx"))
        .map((item) => ({
            ...item,
            posts: getPostAll().filter((i) => i._raw.sourceFilePath.includes(item._raw.flattenedPath)),
        }));
};

export { getPost, getPostAll, getCollection, getCollectionAll };
