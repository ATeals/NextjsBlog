import { tagObj } from "@/lib/type/tagType";
import Link from "next/link";
import Tag from "./Tag";

export default ({ tags }: { tags: Array<tagObj> }) => {
    return (
        <div className=" text-sm text-gray-500 flex-wrap flex m-[10px] p-[10px] [&>*]:my-1">
            {tags ? (
                tags.map((item) => (
                    <>
                        <Link
                            key={item.tag}
                            href={`/tags/${item.tag}`}
                        >
                            <Tag tag={item} />
                        </Link>
                    </>
                ))
            ) : (
                <span> </span>
            )}
        </div>
    );
};
