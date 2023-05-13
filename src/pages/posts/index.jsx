import { allPosts } from "contentlayer/gererated";
import BlogList from "@/components/blogPost/BlogList";

export default ({ posts }) => {
    return (
        <>
            <div className="p-[2em]">
                {posts.map((post) => {
                    return (
                        <BlogList
                            key={post._id}
                            date={post.date}
                            title={post.title}
                            des={post.description}
                            slug={post._raw.flattenedPath}
                        />
                    );
                })}
            </div>
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
