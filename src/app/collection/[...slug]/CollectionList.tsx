import { collection } from "@/lib/dataType";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Post } from "contentlayer/gererated";

import Link from "next/link";

export default ({ post, collection }: { post: Post; collection: collection }) => {
    return (
        <>
            <div className="my-[40px] w-[80%] dark:bg-[#1E1E1E] bg-[#efefef] p-[20px] rounded-[10px]">
                <h1 className="font-bold mb-[5px] text-[32px]">{collection.title}</h1>
                <h1 className="font-bold mx-[10] mb-[15px] text-[20px] text-[#858585] border-b-[#577cf1] border-b border-solid pb-[5px]">
                    {collection.posts.length}
                    <FontAwesomeIcon
                        icon={faPaperclip}
                        className="ml-[5px] text-[18px]"
                    />
                </h1>
                {collection.posts.map((item, index) => (
                    <Link
                        key={item._id}
                        href={`collection/${item._raw.flattenedPath}`}
                    >
                        <div className="flex justify-between mb-[5px]">
                            <h1 className={item.title === post.title ? `font-bold text-[#577cf1]` : ``}>
                                {index + 1}. {item.title}
                            </h1>
                            <h1 className="text-[#858585]">{item.date}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};
