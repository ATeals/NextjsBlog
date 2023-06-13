import { tagObj } from "@/lib/type/tagType";

export default ({ tag }: { tag: tagObj }) => {
    return (
        <>
            <span
                style={{
                    backgroundColor: tag.color.bg,
                    color: tag.color.text,
                }}
                className={"hover:underline whitespace-nowrap text-[15px] mr-[5px] py-[5px] px-[15px] inline-block text-center"}
            >
                #{tag.tag}
            </span>
        </>
    );
};
