import { getAllPosts } from "../components/dataSet/setPostData";
import RecentPosts from "@/components/blogPost/RecentPosts";
import Link from "next/link";

export default ({ posts }) => {
    return (
        <>
            <article className="post">
                <h1>It's Home Page</h1>
                <RecentPosts posts={posts} />
            </article>

            <style jsx>{`
                .post {
                    font-size: 1rem;
                    margin: 20px;
                    padding: 20px;
                    border-radius: 20px;
                }
                h1 {
                    font-size: 2em;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    );
};

export const getStaticProps = async () => {
    const posts = getAllPosts().sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    return {
        props: {
            posts,
        },
    };
};
