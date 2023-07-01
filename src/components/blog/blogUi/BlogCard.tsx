import Link from "next/link";

import { Post } from "contentlayer/gererated";
import TagBox from "@/components/tags/TagBox";
import { PostItem } from "@/lib/dataType";
import Image from "next/image";

export default ({ post }: { post: PostItem }) => {
    return (
        <div className="shadowBottom dark:bg-[#1E1E1E] transform transition-transform duration-200 hover:scale-105 m-[1.2em] max-w-[650px] w-full bg-white shadow-md rounded-lg overflow-hidden px-4 ">
            <Link href={`/collection/${post._raw.flattenedPath}`}>
                <div className="relative h-[300px]">
                    <div className="w-full h-[144px] rounded-lg overflow-hidden aspect-w-19 aspect-h-6">
                        <img
                            src={post.img ? post.img : "/images/logoImg.jpg"}
                            alt="Image"
                            className="object-contain object-center h-full w-full"
                            loading="lazy"
                        />
                    </div>
                    <div className="card-content p-4">
                        <h2 className="card-title text-[1.2rem] font-bold mb-2">{post.title}</h2>
                        <p className="dark:text-[#858585] card-description text-base text-gray-700 mb-4 line-clamp-3 overflow-hidden overflow-ellipsis">{post.description}</p>
                    </div>
                </div>
            </Link>
            <TagBox tags={post.tags} />
            <div className="card-likes text-sm text-gray-500 text-end w-full m-[5px]">{post.date}</div>
        </div>
    );
};
