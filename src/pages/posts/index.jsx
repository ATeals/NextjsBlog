import { allPosts } from "contentlayer/gererated";
import BlogPost from "@/components/blogPost/BlogPost";

export default ({ posts }) => {
    return (
        <>
            <div className="p-[2em]">
                {posts.map((post) => {
                    return (
                        <BlogPost
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
