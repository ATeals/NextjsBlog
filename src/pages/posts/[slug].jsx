import { allPosts } from "contentlayer/gererated";
import CardList from "@/components/blog/blogList/CardList";
import { getCollection } from "../../lib/Postdata";

export default ({ collection }) => {
    console.log();
    return (
        <>
            <div className="m-[20px] flex flex-col items-center mb-[50px] pb-[50px] border-b-[#577CF1] border-b-[2px] border-solid">
                {collection.img ? (
                    <img
                        src={collection.img}
                        alt=""
                        className="rounded-[15px] w-[10rem] h-auto  m-[30px]"
                    />
                ) : null}

                <h1 className="my-[20px] w-full text-center font-bold text-[2em]">{collection.title}</h1>
                <h3>{collection.description}</h3>
            </div>
            <CardList posts={collection.posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))} />
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath.split("/")[0] } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const collection = getCollection(params.slug);
    return {
        props: {
            collection,
        },
    };
};
