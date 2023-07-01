import { allPosts } from "contentlayer/gererated";
import { getColor } from "./type/tagType";

const bodyFilter = (item) => {
    return item.map(({ title, date, description, collection, tags, img, _id, _raw, type }) => ({
        title,
        date,
        description,
        collection,
        tags,
        img,
        _id,
        _raw,
        type,
    }));
};

export const getPost = (url) => {
    return allPosts.find((p) => p._raw.flattenedPath === url);
};

export const getCollection = (url) => {
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
        .find((i) => i._raw.sourceFileDir.includes(url));
};

export const getPostAll = allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx"));

export const getPostList = bodyFilter(allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")));

export const getCollectionAll = bodyFilter(allPosts.filter((i) => i._raw.sourceFilePath.includes("/index.mdx"))).map((item) => ({
    ...item,
    posts: getPostAll.filter((i) => i._raw.sourceFilePath.includes(item._raw.flattenedPath)),
}));

export const getTags = Array.from(
    new Set(
        allPosts
            .filter((i) => i.tags)
            .map((i) => i.tags)
            .reduce((start, index) => [...start, ...index], [])
    )
).map((tag, index) => {
    const colors = getColor;
    return {
        tag,
        color: {
            text: colors[index % colors.length].text,
            bg: colors[index % colors.length].bg,
            darkText: "#f5f5f5",
            darkBg: "#5172A5",
        },
    };
});
