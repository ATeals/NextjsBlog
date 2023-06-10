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
            <h1 className="text-[2em] mx-[10px] font-bold">
                {tag} | {posts.length}
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="ml-[5px] text-[18px]"
                />
            </h1>

            <TagBox tags={tags} />
            <hr className="border-[#A1AAC6] mt-[30px]" />

            <CardList posts={posts} />
        </>
    );
};
