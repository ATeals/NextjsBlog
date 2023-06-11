import Link from "next/link";

export default ({ tags }) => {
    return (
        <div className=" text-sm text-gray-500 overflow-x-scroll flex m-[10px] p-[10px]">
            {tags ? (
                tags.map((item, index) => (
                    <Link
                        key={index}
                        href={`/tags/${item}`}
                    >
                        <span className={"bg-[#cfcfcf] whitespace-nowrap text-[12px] mr-[5px] px-[10px] rounded-[10px] inline-block text-center"}>{item}</span>
                    </Link>
                ))
            ) : (
                <span> </span>
            )}
        </div>
    );
};
