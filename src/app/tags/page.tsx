import { getPostAll, getTags } from "@/lib/Postdata";
import TagBox from "@/components/tags/TagBox";
import CardList from "@/components/blog/blogUi/CardList";

export default () => {
    const tags = getTags;
    const posts = getPostAll;

    return (
        <>
            <h1 className="text-[2em] mx-[10px] font-bold">Tags</h1>
            <TagBox tags={tags} />
            <hr className="border-[#A1AAC6] mt-[30px]" />
            <CardList posts={posts} />
        </>
    );
};
