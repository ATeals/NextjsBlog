import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import Toc from "@/components/blogPost/Toc";
import MarkdownPost from "@/components/blogPost/MarkdownPost";
import PreviewNav from "@/components/blogPost/PreviewNav";
import BlogPost from "../../components/blogPost/BlogPost";
import { getCollactionItem } from "../../components/dataSet/setPostData";

export default ({ collection }) => {
    console.log(collection);
    return (
        <>
            <h1>{collection.title}</h1>
            <h1>{collection.description}</h1>
            {collection.posts.map((post) => {
                return (
                    <BlogPost
                        key={post._id}
                        post={post}
                    />
                );
            })}
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
    const collection = getCollactionItem(params.slug);
    return {
        props: {
            collection,
        },
    };
};
