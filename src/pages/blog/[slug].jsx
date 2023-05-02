import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <>
            <div>{post.title}</div>
            <div className="markdown-body">
                <MDXComponent />
            </div>
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
