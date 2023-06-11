import CardList from "@/components/blog/blogUi/CardList";
import LineList from "@/components/blog/blogUi/LineList";

import { getPostAll } from "@/lib/Postdata";
import { ListFieldDefItem } from "contentlayer/core";
import { Post, allPosts, allDocuments } from "contentlayer/gererated";

export default () => {
    const posts: Array<Post> = getPostAll.sort((a: Post, b: Post) => Number(new Date(b.date)) - Number(new Date(a.date)));
    const collections: Array<Object> = allPosts
        .filter((i) => i._raw.sourceFilePath.includes("/index.mdx"))
        .map((item) => ({
            ...item,
            posts: getPostAll.filter((i) => i._raw.sourceFilePath.includes(item._raw.flattenedPath)),
        }));

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
