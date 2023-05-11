import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import MarkdownPost from "@/components/blogPost/MarkdownPost";

export default ({ post }) => {
    return (
        <>
            <article className="post">
                <div className="log">
                    <MarkdownPost post={post.body.code} />
                </div>
            </article>
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).map((p) => ({ params: { slugs: p._raw.flattenedPath.split("/") } })),
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params }) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slugs.join("/"));
    return {
        props: {
            post,
        },
    };
};
