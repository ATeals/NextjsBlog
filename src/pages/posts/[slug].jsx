import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import Link from "next/link";

export default ({ collection }) => {
    console.log(collection);
    return (
        <div>
            {collection.map((item) => {
                return (
                    <Link href={`/posts/${item._raw.flattenedPath}`}>
                        <h1>{item.title}</h1>
                        <h1>{item.description}</h1>
                        <h1>{item.date}</h1>
                        <br />
                    </Link>
                );
            })}
        </div>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath.split("/")[0] } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    // const collection = getCollactionItem(params.slug);
    const collection = allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).filter((i) => i._raw.flattenedPath.includes(params.slug));
    return {
        props: {
            collection,
        },
    };
};
