import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import Toc from "@/components/blogPost/Toc";
import MarkdownPost from "@/components/blogPost/MarkdownPost";
import Link from "next/link";

export default ({ post, index, prePost, nextPost }) => {
    console.log(prePost, nextPost);
    return (
        <>
            <article className="post">
                <h1>{post.title}</h1>
                <Toc post={post} />
                <div className="log">
                    <MarkdownPost post={post.body.code} />
                </div>
                <div>
                    {prePost ? <Link href={`/posts/${prePost._raw.flattenedPath}`}>이전 글</Link> : null}
                    {nextPost ? <Link href={`/posts/${nextPost._raw.flattenedPath}`}>다음 글</Link> : null}
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
    const index = allPosts.findIndex((p) => p._raw.flattenedPath === params.slug);
    const prePost = allPosts[index + 1] || null;
    const nextPost = allPosts[index - 1] || null;
    return {
        props: {
            post,
            index,
            prePost,
            nextPost,
        },
    };
};
