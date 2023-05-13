import { allPosts } from "contentlayer/gererated";
import "github-markdown-css";
import MarkdownPost from "@/components/blogPost/MarkdownPost";
import Link from "next/link";

const Toc = ({ post }) => {
    const titles = post.body.raw.split(`\n`).filter((t) => t.includes("# "));

    const result = titles
        .filter((str) => str[0] === "#")
        .map((item) => {
            // #의 갯수에 따라 제목의 크기가 달라지므로 갯수를 센다.
            let count = item.match(/#/g)?.length;
            if (count) {
                // 갯수에 따라 목차에 그릴때 들여쓰기 하기위해 *10을 함.
                count = count * 5;
            }

            // 제목의 내용물만 꺼내기 위해 '# '을 기준으로 나누고, 백틱과 공백을 없애주고 count와 묶어서 리턴
            return { title: item.split("# ")[1].replace(/`/g, "").trim(), count };
        });

    return (
        <>
            <ul
                style={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    borderBottom: "1px solid #A1AAC6",
                    borderTop: "1px solid #A1AAC6",
                    padding: "10px",
                }}
                className="@apply text-ellipsis"
            >
                {result.map((item, index) => {
                    return (
                        <a
                            href={`#${item.title}`}
                            key={item + index}
                            style={{ marginLeft: `${item.count * 3}px`, padding: "5px", fontWeight: `${800 - item.count * 10}`, fontSize: "15px", color: "#aeaeae" }}
                            className="@apply whitespace-nowrap w-[100%]"
                        >
                            {item.title}
                        </a>
                    );
                })}
            </ul>
        </>
    );
};

export default ({ post }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center ">
                <h1>{post.title}</h1>
                <article className="post relative flex justify-center w-[80%]">
                    <div className="@apply relative py-[40px] w-[20%]"></div>
                    <div className="px-10 w-[80%]">
                        <MarkdownPost post={post.body.code} />
                    </div>
                    <div className="@apply relative py-[40px] w-[20%]">
                        <div className="@apply sticky right-[50%] top-[25%]">
                            <Toc post={post} />
                        </div>
                    </div>
                </article>
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
