import CardList from "@/components/blog/blogUi/CardList";

import { getPostAll } from "@/lib/Postdata";
import { Post } from "contentlayer/gererated";

export default function Home() {
    const posts: Array<Post> = getPostAll.sort((a: Post, b: Post) => Number(new Date(b.date)) - Number(new Date(a.date)));
    return (
        <>
            <section className="w-full ">
                <section className=" shadowBottom  m-[10px]"></section>
                <CardList
                    posts={posts}
                    num={4}
                />
                <div className="w-full text-end  mb-5">
                    <a
                        href="/collection"
                        className="text-[highlight] mx-10 text-end"
                    >
                        ALL POST &rarr;
                    </a>
                </div>
            </section>
        </>
    );
}
