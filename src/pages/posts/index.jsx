import { allPosts } from "contentlayer/gererated";
import BlogPost from "@/components/BlogPost";

export default ({ posts }) => {
    return (
        <>
            <h1>Blog Page</h1>

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
    const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    return {
        props: {
            posts,
        },
    };
};
