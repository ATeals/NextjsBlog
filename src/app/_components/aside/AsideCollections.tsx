"use client";
import { collection } from "@/lib/dataType";
import Link from "next/link";

export default ({ collections }: { collections: Array<collection> }) => {
    return (
        <section className="my-2 shadowBottom mb-5 p-3 box-border">
            <h1 className=" my-2">Collection</h1>
            <article className="text-[#65737E] dark:text-[#848484] ">
                {collections.map((item) => (
                    <article
                        key={item._id}
                        className=""
                    >
                        <h1 className="text-highlight pb-2 flex justify-between items-center font-bold hover:underline">
                            <Link href={"/collection/" + item._raw.flattenedPath}>
                                <span>{item.title}</span>
                            </Link>

                            <div
                                className="text-highlight"
                                onClick={() => {
                                    document.querySelector(`#${item.collection}`)?.classList.toggle("hidden");
                                }}
                                // className=" bg-highlight text-darkText rounded-[50%] w-[20px] h-[20px] flex justify-center items-center"
                            >
                                {item.posts.length}
                            </div>
                        </h1>
                        <div
                            id={item.collection}
                            className="border-l-[1px] border-l-solid border-l-[#65737E] ml-1 pb-5"
                        >
                            {item.posts.map((post) => (
                                <Link
                                    href={"/collection/" + post._raw.flattenedPath}
                                    key={post._id}
                                >
                                    <h1 className="pl-2 pb-2 hover:underline">{post.title}</h1>
                                </Link>
                            ))}
                        </div>
                    </article>
                ))}
            </article>
        </section>
    );
};
