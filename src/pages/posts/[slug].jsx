import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import Toc from "@/components/Toc";
import MarkdownPost from "@/components/MarkdownPost";

export default ({ post }) => {
    return (
        <>
            <article className="post">
                <h1>{post.title}</h1>
                <Toc post={post} />
                <div className="log">
                    <MarkdownPost post={post.body.code} />
                </div>
            </article>

            <style jsx>{`
                .post {
                    display: flex;
                    justify-content: center;
                    font-size: 1rem;
                    flex-direction: column;
                    padding: 20px;
                    margin: 20px;
                    margib-bottom: 100px;
                    border-radius: 50px;
                }

                h1 {
                    font-size: 2em;
                    font-weight: 700;
                    display: flex;
                    justify-content: center;
                    margin: 50px;
                }

                .log {
                    border-top: 1px solid #c6d6f5;
                    padding-top: 10px;
                }
            `}</style>
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
