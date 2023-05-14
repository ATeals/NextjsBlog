import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import MarkdownPost from "@/components/blog/blogPost/MarkdownPost";
import Toc from "@/components/toc/Toc";
import TocMenu from "@/components/toc/TocMenu";
import Link from "next/link";
import { getCollection } from "../../lib/Postdata";

export default ({ post, collection }) => {
    console.log(collection);
    return (
        <>
            <div className="flex flex-col items-center justify-center my-[40px]">
                <h1 className="font-bold text-[3em] my-[100px]">{post.title}</h1>
                <article className="post relative flex justify-center w-[90%] md:w-[80%]">
                    <div className="@apply relative py-[40px] w-[20%] hidden md:block"></div>
                    <div className="px-[3px] w-[100%]">
                        <MarkdownPost post={post.body.code} />
                    </div>
                    <div className="@apply relative py-[40px] w-[20%] hidden md:block">
                        <div className="@apply sticky right-[50%] top-[25%]">
                            <Toc post={post} />
                        </div>
                    </div>
                </article>

                <div className="my-[40px]">
                    {collection.posts.map((item, index) => (
                        <Link href={`${item._raw.flattenedPath}`}>
                            <h1 className={item.title === post.title ? `font-bold text-[#577cf1]` : ``}>
                                {index + 1}. {item.title}
                            </h1>
                        </Link>
                    ))}
                </div>
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
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slugs.join("/"));
    // const collection = allPosts
    //     .filter((i) => i._raw.sourceFilePath.includes("/index.mdx"))
    //     .map((item) => ({
    //         ...item,
    //         posts: allPosts
    //             .filter((i) => i._raw.sourceFilePath.includes(item._raw.flattenedPath))
    //             .filter((i) => !i._raw.sourceFilePath.includes("/index.mdx"))
    //             .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date))),
    //     }))
    //     .find((i) => i._raw.sourceFileDir.includes(post._raw.sourceFileDir));
    const collection = getCollection(post);
    return {
        props: {
            post,
            collection,
        },
    };
};
