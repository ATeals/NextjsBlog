import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import Toc from "@/components/blogPost/Toc";
import MarkdownPost from "@/components/blogPost/MarkdownPost";
import { getAllPosts } from "../../components/dataSet/setPostData";

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
        paths: getAllPosts().map((p) => ({ params: { slugs: p._raw.flattenedPath.split("/") } })),
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
