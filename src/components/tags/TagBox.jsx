import Link from "next/link";

export default ({ tags, choice }) => {
    return (
        <div className="card-date text-sm text-gray-500 overflow-x-scroll flex flex-nowrap m-[10px]">
            {tags ? (
                tags.map((item, index) => (
                    <Link
                        key={index}
                        href={`/tags/${item}`}
                    >
                        <span
                            className={
                                (item === choice ? "bg-[#577cf1] text-[#e0e0e0] " : "bg-[#cfcfcf] ") + " whitespace-nowrap text-[12px] mr-[5px] px-[10px] rounded-[10px] inline-block text-center"
                            }
                        >
                            {item}
                        </span>
                    </Link>
                ))
            ) : (
                <span> </span>
            )}
        </div>
    );
};
