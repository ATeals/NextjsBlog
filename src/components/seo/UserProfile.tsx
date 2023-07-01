import { collection } from "@/lib/dataType";
import { tagObj } from "@/lib/type/tagType";
import { Post } from "contentlayer/gererated";
import SiteIconBox from "./SiteIconBox";

export default ({ posts, tags, collections }: { posts: Array<Post>; tags: Array<tagObj>; collections: Array<collection> }) => {
    return (
        <section className="shadowBottom flex flex-col justify-center items-center pb-8 mb-4">
            <section className="flex flex-col justify-center items-center my-4 pb-4">
                <img
                    src="https://avatars.githubusercontent.com/u/125727432?v=4"
                    alt="User Profile Img"
                    className="w-[50%] h-[auto] rounded-[50%] my-5"
                    loading="lazy"
                />
                <h1>A_Teals</h1>
            </section>

            <SiteIconBox size={16} />

            <section className="flex justify-center space-x-5">
                <article className="text-center">
                    <h2 className="text-[#65737E]">시리즈</h2>
                    <h4 className="font-bold text-[20px]">{collections.length}</h4>
                </article>
                <article className="text-center">
                    <h2 className="text-[#65737E]">태그</h2>
                    <h4 className="font-bold text-[20px]">{tags.length}</h4>
                </article>
                <article className="text-center">
                    <h2 className="text-[#65737E]">포스트</h2>
                    <h4 className="font-bold text-[20px]">{posts.length}</h4>
                </article>
            </section>
        </section>
    );
};
