import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import MarkdownPost from "../../components/markdownPost";

export default ({ post }) => {
    return (
        <>
            <article className="post">
                <h1>{post.title}</h1>
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
                    border-radius: 50px;
                    background: #e9eaf5;
                    box-shadow: 20px 20px 60px #c6c7d0, -20px -20px 60px #ffffff;
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
