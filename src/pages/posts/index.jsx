import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";

export default ({ collections, posts }) => {
    return (
        <>
            <CardList posts={collections} />
            <section className="@apply flex justify-center flex-col">
                <h1 className="text-center text-[2em]">--- All Post ---</h1>
                <CardList posts={posts} />
            </section>
        </>
    );
};

export const getStaticProps = async () => {
    //allPosts => 해당 경로의 mdx파일을 배열에 담아서 전송해줌!
    const collections = allPosts.filter((i) => i._raw.sourceFilePath.includes("/index.mdx"));
    const posts = allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx"));
    return {
        props: {
            collections,
            posts,
        },
    };
};
