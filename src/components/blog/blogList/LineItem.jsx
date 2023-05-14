import Link from "next/link";
import { PaperClipOutlined } from "@ant-design/icons";

export default ({ post }) => {
    return (
        <Link
            href={`/posts/${post._raw.flattenedPath}`}
            passHref
        >
            <div className="@apply transform transition-transform duration-200 hover:scale-105 w-[100%] relative flex mb-[10px] bg-white shadow-md rounded-lg overflow-hidden p-4">
                <div className="">
                    <h1 className="text-[1.5rem] font-bold mb-2">{post.title}</h1>
                    <h4>{post.description}</h4>
                </div>
                <h4 className="@apply absolute text-[#aaaaaa] w-[100%] h-[100%] text-end bottom-[-2] right-0 p-[1em] text-[1.5em] font-bold">
                    {post.posts.length} <PaperClipOutlined />
                </h4>
            </div>
        </Link>
    );
};
