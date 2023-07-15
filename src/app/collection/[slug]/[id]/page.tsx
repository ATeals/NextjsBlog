import { getCollection, getPostAll } from "@/lib/Postdata";
import MarkdownPost from "./MarkdownPost";
import { unescape } from "querystring";
import CollectionList from "./CollectionList";
import { Toc } from "@/components/blog/toc/Toc";

import { Suspense } from "react";
import ButtonMenu from "@/components/blog/ui/button/ButtonMenu";
import TagBox from "@/components/tags/TagBox";

export async function generateStaticParams() {
    return getPostAll.map((post) => ({
        slug: post._raw.flattenedPath.split("/")[0],
        id: post._raw.flattenedPath.split("/")[1],
    }));
}

export default ({ params: { slug, id } }: { params: { slug: string; id: string } }) => {
    const post = getPostAll.find((p) => p._raw.flattenedPath === `${slug}/${unescape(id)}`);
    const collection = getCollection(post && post._raw.sourceFileDir);

    return (
        <>
            <section className="w-full">
                <div className="w-[100%] flex flex-col items-center justify-center">
                    <section className="w-full flex flex-col items-center justify-center m-[10px]">
                        <h1 className="font-bold text-[2em] md:text-[3em] px-10 text-center break-keep my-[100px]">{post && post.title}</h1>
                        {post && post.img ? (
                            <img
                                src={post.img}
                                alt=""
                                className="rounded-[15px] w-[300px] h-auto  mb-10"
                            />
                        ) : null}
                        <div className="mb-10">
                            <TagBox tags={post?.tags} />
                        </div>
                    </section>

                    <article className="w-full relative flex justify-center mb-[40px]">
                        <div className="px-[3px] md:m-[5px] w-full md:w-[80%] ml-0 box-border shadowBottom">
                            <Suspense fallback={<h1>loading..</h1>}>
                                <MarkdownPost post={post?.body.code || ""} />
                            </Suspense>
                        </div>
                        <div className="relative w-[20%] my-[10px] hidden md:block">
                            <div className="sticky right-[50%] top-[25%]">
                                <Toc
                                    post={post}
                                    menuToggle={null}
                                />
                                <ButtonMenu />
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

                {/* <TocMenu post={post} /> */}
            </section>
        </>
    );
};

export const generateMetadata = ({ params: { slug, id } }: { params: { slug: string; id: string } }) => {
    const post = getPostAll.find((p) => p._raw.flattenedPath === `${slug}/${unescape(id)}`);
    return (
        post && {
            title: "Ateals Blog",
            description: "Welcome my Blog!",
            canonical: "https://www.carrotins.com",
            openGraph: {
                type: "website",
                locale: "ko_KR",
                url: `https://tealslog.vercel.app/collection/${post._raw.flattenedPath}`,
                title: post.title,
                description: post.description,
                site_name: "Ateals Blog",
                images: [
                    {
                        url: post.img ? post.img : "https://tealslog.vercel.app/images/logoImg.jpg",
                        width: 1900,
                        height: 630,
                        alt: "og: 이미지",
                    },
                ],
            },
            twitter: {
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
            },
        }
    );
};
