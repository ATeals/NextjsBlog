import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";
import { useState } from "react";

export default () => {
    const [posts, SetPosts] = useState(allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))));
    return (
        <>
            {/* <section className="w-[800px] h-[800px]"></section> */}
            <section className="mx-[10%]">
                <h1 className="font-bold text-[2em] w-full text-center my-[20px] py-[20px] border-b-[#577CF1] border-b-[2px] border-solid">최근 포스트</h1>
                <div className="flex justify-end">
                    <span className=" mx-[5%] text-end text-[#c6d6f5] hover:scale-105 hover:text-[#74a0e0]">
                        <a href="/posts"> 모든 포스트 &rarr;</a>
                    </span>
                </div>

                <CardList
                    posts={posts}
                    num={4}
                />
            </section>
        </>
    );
};
