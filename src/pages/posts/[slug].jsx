import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";
import { getCollection } from "../../lib/Postdata";

export default ({ collection }) => {
    return (
        <>
            <CardList posts={collection} />
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath.split("/")[0] } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    // const collection = allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).filter((i) => i._raw.flattenedPath.includes(params.slug));
    const collection = getCollection(params.slug).posts;
    return {
        props: {
            collection,
        },
    };
};
