import Link from "next/link";

export default ({ tags }) => {
    return (
        <div className=" text-sm text-gray-500 overflow-x-scroll text-[#000000] flex m-[10px] p-[10px]">
            {tags ? (
                tags.map((item, index) => (
                    <Link
                        key={index + item}
                        href={`/tags/${item}`}
                    >
                        <span className={"bg-[#cfcfcf] whitespace-nowrap text-[15px] mr-[5px] py-[5px] px-[15px] inline-block text-center"}>#{item}</span>
                    </Link>
                ))
            ) : (
                <span> </span>
            )}
        </div>
    );
};
