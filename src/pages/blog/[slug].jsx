import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import MarkdownPost from "../../components/markdownPost";

export default ({ post }) => {
    return (
        <>
            <div>{post.title}</div>
            <div className="markdown-body"></div>
            <MarkdownPost post={post.body.code} />
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
    return {
        props: {
            post,
        },
    };
};
