import { tagObj } from "@/lib/type/tagType";
import TagList from "../tags/TagList";

export default ({ tags }: { tags: Array<tagObj> }) => {
    return (
        <section className="my-2 shadowBottom mb-5 box-border">
            <h1 className="my-2 p-5 px-5">Tags</h1>
            <TagList tags={tags} />
        </section>
    );
};
