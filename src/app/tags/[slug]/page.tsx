import { getTags } from "@/lib/Postdata";
import { getPostAll } from "@/lib/Postdata";

import CardList from "@/components/blog/blogUi/CardList";
import { unescape } from "querystring";
import TagList from "@/components/tags/TagList";
import Tag from "@/components/tags/Tag";

export async function generateStaticParams() {
    return getTags.map(({ tag }) => ({
        slug: tag,
    }));
}

export default ({ params: { slug } }: { params: { slug: string } }) => {
    const tags = getTags;
    const tag = tags.find((tag) => tag.tag === unescape(slug));
    const posts = getPostAll.filter((i) => i.tags && i.tags.includes(tag?.tag || ""));
    return (
        <>
            <section className="w-full">
                <section className=" m-[10px] shadowBottom box-border text-[10px] font-bold">
                    <h1 className="text-[2em] p-[20px] font-bold">
                        {tag && <Tag tag={tag} />} | {posts.length}
                        <i className="bi bi-tags"></i>
                    </h1>

                    <TagList tags={tags} />
                </section>

                <CardList posts={posts} />
            </section>
        </>
    );
};
