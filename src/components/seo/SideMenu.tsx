import { getCollectionAll, getPostAll, getTags } from "@/lib/Postdata";
import Link from "next/link";
import TagList from "./TagList";

export default () => {
    const postNum = getPostAll.length;
    const tags = getTags;
    const collection = getCollectionAll;
    return (
        <>
            <section className="shadowBottom flex flex-col justify-center items-center pb-8 mb-4">
                <section className="flex flex-col justify-center items-center my-4 pb-4">
                    <img
                        src="https://avatars.githubusercontent.com/u/125727432?v=4"
                        alt="User Profile Img"
                        className="w-[50%] h-[auto] rounded-[50%] my-5"
                    />
                    <h1>A_Teals</h1>
                </section>

                <section className="m-2 flex justify-center space-x-2 mb-4">
                    <Link href="https://github.com/ATeals">
                        <img
                            className="rounded-[50%]"
                            alt=""
                            src="https://www.google.com/s2/favicons?domain=https://github.com/ATeals&sz=16"
                        />
                    </Link>
                    <Link href="https://velog.io/@ateals_12">
                        <img
                            alt=""
                            src="https://www.google.com/s2/favicons?domain=https://velog.io/@ateals_12&sz=16"
                        />
                    </Link>
                    <Link href="mailto:ateals@icloud.com">
                        <img
                            alt=""
                            src="https://www.google.com/s2/favicons?domain=https://support.apple.com/ko-kr/mail&sz=16"
                        />
                    </Link>
                </section>

                <section className="flex justify-center space-x-5">
                    <article className="text-center">
                        <h2 className="text-[#65737E]">시리즈</h2>
                        <h4 className="font-bold text-[20px]">{collection.length}</h4>
                    </article>
                    <article className="text-center">
                        <h2 className="text-[#65737E]">태그</h2>
                        <h4 className="font-bold text-[20px]">{tags.length}</h4>
                    </article>
                    <article className="text-center">
                        <h2 className="text-[#65737E]">포스트</h2>
                        <h4 className="font-bold text-[20px]">{postNum}</h4>
                    </article>
                </section>
            </section>

            <section className="my-2 shadowBottom mb-5 p-3 box-border">
                <h1 className=" my-2">Collection</h1>
                <article className="text-[#65737E] dark:text-[#848484] ">
                    {collection.map((item) => (
                        <article
                            key={item._id}
                            className=""
                        >
                            <h1 className="text-highlight pb-2 flex justify-between items-center font-bold">
                                <Link href={"/collection/" + item._raw.flattenedPath}>
                                    <span>{item.title}</span>
                                </Link>

                                <div
                                    className="text-highlight"
                                    // className=" bg-highlight text-darkText rounded-[50%] w-[20px] h-[20px] flex justify-center items-center"
                                >
                                    {item.posts.length}
                                </div>
                            </h1>
                            <div className="border-l-[1px] border-l-solid border-l-[#65737E] ml-1 pb-5">
                                {item.posts.map((post) => (
                                    <Link
                                        href={"/collection/" + post._raw.flattenedPath}
                                        key={post._id}
                                    >
                                        <h1 className="pl-2 pb-2">{post.title}</h1>
                                    </Link>
                                ))}
                            </div>
                        </article>
                    ))}
                </article>
            </section>

            <section className="my-2 shadowBottom mb-5 p-3 box-border">
                <h1 className="my-2">Tags</h1>
                <TagList tags={tags} />
            </section>
        </>
    );
};
