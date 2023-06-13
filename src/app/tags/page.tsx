import { getPostAll, getTags } from "@/lib/Postdata";
import TagBox from "@/components/tags/TagBox";
import CardList from "@/components/blog/blogUi/CardList";
import TagList from "@/components/tags/TagList";

export default () => {
    const tags = getTags;
    const posts = getPostAll;
    return (
        <>
            <section className="w-full">
                <section className=" m-[10px] shadowBottom box-border">
                    <h1 className="text-[2em] p-[20px] font-bold">
                        Tags <i className="bi bi-tags"></i>
                    </h1>
                    <TagList tags={tags} />
                </section>

                <CardList posts={posts} />
            </section>
        </>
    );
};
