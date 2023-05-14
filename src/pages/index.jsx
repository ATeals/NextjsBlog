import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";

export default ({ posts }) => {
    return (
        <>
            <section>
                <div>
                    <h1>최신 글</h1>
                    <h4>모든 포스트 </h4>
                </div>

                <CardList
                    posts={posts}
                    num={2}
                />
            </section>
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
