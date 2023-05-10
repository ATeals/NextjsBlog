import BlogPost from "@/components/blogPost/BlogPost";

export default ({ posts }) => {
    return (
        <section>
            <h1>최신 포스트</h1>
            {posts.slice(0, 3).map((post) => (
                <BlogPost
                    key={post._id}
                    post={post}
                />
            ))}
        </section>
    );
};
