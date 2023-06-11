import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagBox from "@/components/tags/TagBox";
import { getTags } from "@/lib/Postdata";
import { getPostAll } from "@/lib/Postdata";

import CardList from "@/components/blog/blogUi/CardList";
import { unescape } from "querystring";

export default ({ params: { slug } }: { params: { slug: string } }) => {
    const tags = getTags;
    const tag = unescape(slug);
    const posts = getPostAll.filter((i) => i.tags && i.tags.includes(tag));
    return (
        <>
            <section className="w-full">
                <section className=" m-[10px] shadowBottom box-border">
                    {tag} | {posts.length}
                    <FontAwesomeIcon
                        icon={faPaperclip}
                        className="ml-[5px] text-[18px]"
                    />
                    <TagBox tags={tags} />
                </section>

                <CardList posts={posts} />
            </section>
        </>
    );
};
