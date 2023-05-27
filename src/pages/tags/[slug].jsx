import { allPosts } from "contentlayer/gererated";
import { getPostAll, getTags } from "../../lib/Postdata";
import CardList from "../../components/blog/blogList/CardList";
import TagBox from "../../components/tags/TagBox";
import { faFile, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ posts, tag, tags }) => {
    console.log();
    return (
        <>
            <h1 className="text-[2em] mx-[10px] font-bold">
                {tag} | {posts.length}
                <FontAwesomeIcon
                    icon={faFile}
                    className="ml-[5px]"
                />
            </h1>

            <TagBox
                tags={tags}
                choice={tag}
            />
            <hr className="border-[#A1AAC6] mt-[30px]" />

            <CardList posts={posts} />
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: Array.from(
            new Set(
                allPosts
                    .filter((i) => i.tags)
                    .map((i) => i.tags)
                    .reduce((start, index) => [...start, ...index], [])
            )
        ).map((i) => ({ params: { slug: i } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const posts = getPostAll().filter((i) => i.tags.includes(slug));
    const tag = slug;
    const tags = getTags;
    return {
        props: {
            posts,
            tag,
            tags,
        },
    };
};
