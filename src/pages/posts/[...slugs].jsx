import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import MarkdownPost from "@/components/blog/blogPost/MarkdownPost";
import Toc from "@/components/toc/Toc";
import TocMenu from "@/components/toc/TocMenu";
import { PostSeo } from "../../components/seo/seoObject";

import { getCollection, getPost } from "../../lib/Postdata";
import CollectionList from "../../components/blog/blogPost/CollectionList";

export default ({ post, collection }) => {
    return (
        <>
            <PostSeo post={post} />
            <div className="flex flex-col items-center justify-center my-[40px]">
                <h1 className="font-bold text-[2em] md:text-[3em]  my-[100px]">{post.title}</h1>
                {post.img ? (
                    <img
                        src={post.img}
                        alt=""
                        className="rounded-[15px] w-[10rem] h-auto  mb-[100px]"
                    />
                ) : null}

                <article className="post relative flex justify-center w-[95%]">
                    <div className="@apply relative py-[40px] w-[20%] hidden md:block"></div>
                    <div className="px-[3px] w-[100%]">
                        <MarkdownPost post={post.body.code} />
                    </div>
                    <div className="@apply relative py-[40px] w-[20%] hidden md:block">
                        <div className="@apply sticky right-[50%] top-[25%]">
                            <Toc
                                post={post}
                                menuToggle={() => {}}
                            />
                        </div>
                    </div>
                </article>

                <CollectionList
                    post={post}
                    collection={collection}
                />
            </div>

            <TocMenu post={post} />
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
    const post = getPost(params.slugs.join("/"));
    const collection = getCollection(post._raw.sourceFileDir);
    return {
        props: {
            post,
            collection,
        },
    };
};
