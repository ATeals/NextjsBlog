import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";

export default ({ posts }) => {
    return (
        <>
            <CardList
                posts={posts}
                num={2}
            />
        </>
    );
};

export const getStaticProps = async () => {
    const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    return {
        props: {
            posts,
        },
    };
};
