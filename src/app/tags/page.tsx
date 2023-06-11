import { getPostAll, getTags } from "@/lib/Postdata";
import TagBox from "@/components/tags/TagBox";
import CardList from "@/components/blog/blogUi/CardList";

export default () => {
    const tags = getTags;
    const posts = getPostAll;

    return (
        <>
            <section className="w-full">
                <section className=" m-[10px] shadowBottom box-border">
                    <h1 className="text-[2em] font-bold">Tags</h1>
                    <TagBox tags={tags} />
                </section>

                <CardList posts={posts} />
            </section>
        </>
    );
};
