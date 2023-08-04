import CardList from "@/components/blog/blogUi/CardList";
// import GithubGrass from "@/components/til/GithubGrass";

import { getPostList } from "@/lib/Postdata";
// import { Suspense } from "react";
// import TilList, { SkeletonTilList } from "./til/TilList";
import { PostItem } from "@/lib/dataType";

export default function Home() {
    const posts: Array<PostItem> = getPostList.sort((a: PostItem, b: PostItem) => Number(new Date(b.date)) - Number(new Date(a.date)));
    return (
        <>
            <section className="w-full ">
                {/* <GithubGrass />

                <section className="m-10">
                    <h1 className="font-bold text-[32px] mx-2 mb-10">TIL</h1>
                    <Suspense fallback={<SkeletonTilList />}>
                        <TilList />
                    </Suspense>
                </section> */}

                <section>
                    <h1 className="font-bold text-[32px] mx-10">최근 포스트</h1>
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
            </section>
        </>
    );
}
