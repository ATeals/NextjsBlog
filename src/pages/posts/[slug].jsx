import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";

export default ({ collection }) => {
    console.log(collection);
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
    // const collection = getCollactionItem(params.slug);
    const collection = allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).filter((i) => i._raw.flattenedPath.includes(params.slug));
    return {
        props: {
            collection,
        },
    };
};
