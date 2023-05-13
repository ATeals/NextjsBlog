import BlogList from "@/components/blogPost/BlogList";

export default ({ posts }) => {
    return (
        <section>
            {posts.slice(0, 3).map((post) => (
                <BlogList
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
