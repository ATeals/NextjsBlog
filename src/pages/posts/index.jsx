import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";
import LineList from "@/components/blog/blogList/LineList";
import { getPostAll, getCollectionAll } from "../../lib/Postdata";

export default ({ collections, posts }) => {
    return (
        <>
            <section className="@apply flex justify-center flex-col">
                <LineList posts={collections} />
            </section>

            <section className="@apply flex justify-center flex-col">
                <CardList posts={posts} />
            </section>
        </>
    );
};

export const getStaticProps = async () => {
    const collections = getCollectionAll();
    const posts = getPostAll().sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    return {
        props: {
            collections,
            posts,
        },
    };
};
