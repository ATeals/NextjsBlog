import Link from "next/link";

export default ({ post }) => {
    return (
        <div className="dark:bg-[#1E1E1E] transform transition-transform duration-200 hover:scale-105 m-[1.2em] max-w-[650px] w-full bg-white shadow-md rounded-lg overflow-hidden px-4 ">
            <Link href={`/posts/${post._raw.flattenedPath}`}>
                <div className="relative">
                    <div className="w-full h-[144px] rounded-lg overflow-hidden aspect-w-19 aspect-h-6">
                        <img
                            src={post.img ? post.img : "/images/logoImg.jpg"}
                            alt="Image"
                            className="object-contain object-center h-full w-full"
                        />
                    </div>
                </div>

                <div className="card-content p-4">
                    <h2 className="card-title text-[1.2rem] font-bold mb-2">{post.title}</h2>
                    <p className="dark:text-[#858585] card-description text-base text-gray-700 mb-4 line-clamp-3 overflow-hidden overflow-ellipsis">{post.description}</p>
                    <div className="card-footer flex justify-between h-[25px]">
                        <div className="card-date text-sm text-gray-500 overflow-x-scroll flex flex-nowrap">
                            {post.tags ? (
                                post.tags.map((item, index) => (
                                    <span
                                        key={`${item}${index}`}
                                        className=" bg-[#cfcfcf] mr-[5px] px-[10px] rounded-[10px] inline-block text-center"
                                    >
                                        {item}
                                    </span>
                                ))
                            ) : (
                                <span> </span>
                            )}
                        </div>
                    </div>
                    <div className="card-likes text-sm text-gray-500 text-end w-full mt-[5px]">{post.date}</div>
                </div>
            </Link>
        </div>
    );
};
