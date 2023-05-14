import Link from "next/link";
import { PaperClipOutlined } from "@ant-design/icons";
import LineItem from "./LineItem";

export default ({ posts }) => {
    return (
        <>
            <section className="p-[20px]">
                {posts.map((post) => (
                    <LineItem post={post} />
                ))}
            </section>
        </>
    );
};
