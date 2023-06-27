import { tagObj } from "@/lib/type/tagType";
import Link from "next/link";
import Tag from "./Tag";

export default ({ tags }: { tags: Array<tagObj> }) => {
    return (
        <div className=" text-sm text-gray-500 flex-wrap flex px-5 pb-10 [&>*]:my-1">
            {tags ? (
                tags.map((item, index) => (
                    <Link
                        key={item.tag + index}
                        href={`/tags/${item.tag}`}
                    >
                        <Tag tag={item} />
                    </Link>
                ))
            ) : (
                <span> </span>
            )}
        </div>
    );
};
