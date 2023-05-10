import { allPosts } from "contentlayer/gererated";

/**
 *
 * @param {string} str url
 * @returns {Object}
 */
export const getCollactionItem = (str) => {
    const item = allPosts.filter((post) => post._raw.sourceFilePath.includes("/index.mdx")).filter((post) => post._raw.flattenedPath == str)[0];
    const posts = allPosts.filter((post) => post._raw.sourceFileDir.includes(str) && !post._raw.sourceFilePath.includes("/index.mdx"));
    return {
        ...item,
        posts,
    };
};

/**
 *
 * @returns Allpost except for index.mdx
 */
export const getAllPosts = () => {
    const item = allPosts.filter((post) => !post._raw.sourceFilePath.includes("/index.mdx"));
    return [...item];
};

/**
 *
 * @returns {Object[]} Collaction list
 */
export const getCollaction = () => {
    const getCollaction = allPosts.filter((post) => post._raw.sourceFilePath.includes("/index.mdx")).map((p) => getCollactionItem(p._raw.flattenedPath));
    return [...getCollaction];
};
