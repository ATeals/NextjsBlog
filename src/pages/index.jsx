import { allPosts } from "contentlayer/gererated";
import RecentPosts from "../components/RecentPosts";

export default ({ posts }) => {
    return (
        <>
            <h1 className="text-3xl underline">It's Home Page</h1>
            <RecentPosts posts={posts} />
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
