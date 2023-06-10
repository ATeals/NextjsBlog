import { getCollection, getPost, getPostAll } from "@/lib/Postdata";
import MarkdownPost from "@/app/collection/[...slug]/MarkdownPost";
import { unescape } from "querystring";
import CollectionList from "./CollectionList";
import { Toc } from "./toc/Toc";
import TocMenu from "./toc/TocMenu";

export default ({ params: { slug } }: { params: { slug: Array<string> } }) => {
    const post = getPostAll.find((p) => p._raw.flattenedPath === slug.map((url: string) => unescape(url)).join("/"));
    const collection = getCollection(post && post._raw.sourceFileDir);

    return (
        <>
            {/* <PostSeo post={post} /> */}
            <div className="flex flex-col items-center justify-center my-[40px]">
                <h1 className="font-bold text-[2em] md:text-[3em]  my-[100px]">{post && post.title}</h1>
                {post && post.img ? (
                    <img
                        src={post.img}
                        alt=""
                        className="rounded-[15px] w-[10rem] h-auto  mb-[100px]"
                    />
                ) : null}

                <article className="post relative flex justify-center w-[95%]">
                    <div className="@apply relative py-[40px] w-[20%] hidden md:block"></div>
                    <div className="px-[3px] w-[100%]">
                        <MarkdownPost post={post && post.body.code} />
                    </div>
                    <div className="@apply relative py-[40px] w-[20%] hidden md:block">
                        <div className="@apply sticky right-[50%] top-[25%]">
                            <Toc
                                post={post}
                                menuToggle={null}
                            />
                        </div>
                    </div>
                </article>
                {post && collection && (
                    <CollectionList
                        post={post}
                        collection={collection}
                    />
                )}
            </div>

            <TocMenu post={post} />
        </>
    );
};
