import { getCollection, getPost, getPostAll } from "@/lib/Postdata";
import MarkdownPost from "@/app/collection/[...slug]/MarkdownPost";
import { unescape } from "querystring";
import CollectionList from "./CollectionList";
import { Toc } from "./toc/Toc";
import TocMenu from "./toc/TocMenu";

// export async function generateStaticParams() {
//     const posts = getPostAll;

//     return posts.map((post) => ({
//         slug: post._raw.flattenedPath.split("/"),
//     }));
// }

export default ({ params: { slug } }: { params: { slug: Array<string> } }) => {
    const post = getPostAll.find((p) => p._raw.flattenedPath === slug.map((url: string) => unescape(url)).join("/"));
    const collection = getCollection(post && post._raw.sourceFileDir);

    return (
        <>
            hello
            {/* <section className="w-full">
                <div className="w-[100%] flex flex-col items-center justify-center">
                    <section className="w-full flex flex-col items-center justify-center shadowBottom m-[10px]">
                        <h1 className="font-bold text-[2em] md:text-[3em]  my-[100px]">{post && post.title}</h1>
                        {post && post.img ? (
                            <img
                                src={post.img}
                                alt=""
                                className="rounded-[15px] w-[10rem] h-auto  mb-[100px]"
                            />
                        ) : null}
                    </section>

                    <article className="w-full  relative flex justify-center mb-[40px] m-[10px]">
                        <div className="px-[3px] m-[10px] w-[95%] md:w-[80%] ml-0 box-border md:shadowBottom">
                            <MarkdownPost post={post && post.body.code} />
                        </div>
                        <div className="relative w-[20%] my-[10px] hidden md:block">
                            <div className="sticky right-[50%] top-[25%]">
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
            </section> */}
        </>
    );
};

export const generateMetadata = ({ params: { slug } }: { params: { slug: Array<string> } }) => {
    const post = getPostAll.find((p) => p._raw.flattenedPath === slug.map((url: string) => unescape(url)).join("/"));
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
