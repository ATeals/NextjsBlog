import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";

export default ({ posts }) => {
    return (
        <>
            <CardList posts={posts} />
            <CardList posts={allPosts} />
        </>
    );
};

export const getStaticProps = async () => {
    //allPosts => 해당 경로의 mdx파일을 배열에 담아서 전송해줌!
    const posts = allPosts.filter((i) => i._raw.sourceFilePath.includes("/index.mdx"));

    return {
        props: {
            posts,
        },
    };
};
