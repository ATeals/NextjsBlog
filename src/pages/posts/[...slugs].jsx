import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import MarkdownPost from "@/components/blog/blogPost/MarkdownPost";
import Toc from "@/components/blog/blogPost/Toc";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

export default ({ post }) => {
    const menu = useRef(null);
    const onClickHandler = () => {
        menu.current.classList.toggle("hidden");
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1>{post.title}</h1>
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
                <div
                    onClick={onClickHandler}
                    className="md:hidden fixed bottom-0 right-0 m-[25px] w-[2em] h-[2em] bg-[gray] rounded-[10px] flex items-center justify-center"
                >
                    <MenuOutlined />
                </div>
                <div
                    ref={menu}
                    className={`hidden fixed bottom-0 right-0 m-[25px] bg-[gray] rounded-[10px]`}
                >
                    <Toc
                        post={post}
                        clickHander={onClickHandler}
                    />
                </div>
            </div>
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
