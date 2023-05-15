import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";
import LineList from "@/components/blog/blogList/LineList";
import { getPostAll, getCollectionAll } from "../../lib/Postdata";

export default ({ collections, posts }) => {
    return (
        <>
            <section className="@apply flex justify-center flex-col">
                <h1 className="text-center text-[2em]">--- Collection ---</h1>
                <LineList posts={collections} />
            </section>

            <section className="@apply flex justify-center flex-col">
                <h1 className="text-center text-[2em]">--- All Post ---</h1>
                <CardList posts={posts} />
            </section>
        </>
    );
};

export const getStaticProps = async () => {
    const collections = getCollectionAll();
    const posts = getPostAll();
    return {
        props: {
            collections,
            posts,
        },
    };
};
