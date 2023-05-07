import { allPosts } from "contentlayer/gererated";

const PathList = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

// export function setPath() {
//     const obj = {};
//     allPosts.map((p) => {
//         pathList.push({
//             title: p._raw.flattenedPath,
//             path: `/blog/${p._raw.flattenedPath}`,
//         });
//     });

//     pathList.map(({ title, path }) => {
//         return (obj[`${path}`] = title);
//     });
//     return obj;
// }

export default PathList;
