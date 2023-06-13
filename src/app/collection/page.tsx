import CardList from "@/components/blog/blogUi/CardList";
import LineList from "@/components/blog/blogUi/LineList";

import { getCollectionAll, getPostAll } from "@/lib/Postdata";
import { ListFieldDefItem } from "contentlayer/core";
import { Post, allPosts } from "contentlayer/gererated";

export default () => {
    const posts: Array<Post> = getPostAll.sort((a: Post, b: Post) => Number(new Date(b.date)) - Number(new Date(a.date)));
    const collections: Array<Object> = getCollectionAll;

    return (
        <>
            <section className="w-full">
                <section className="@apply flex justify-center flex-col">
                    <LineList posts={collections} />
                </section>

                <section className="@apply flex justify-center flex-col">
                    <CardList posts={posts} />
                </section>
            </section>
        </>
    );
};
