import Link from "next/link";
import BlogPost from "@/components/blogPost/BlogPost";

export default ({ posts }) => {
    return (
        <section>
            {posts.slice(0, 3).map((post) => (
                <BlogPost
                    key={post._id}
                    date={post.date}
                    title={post.title}
                    des={post.description}
                    slug={post._raw.flattenedPath}
                />
            ))}
        </section>
    );
};
