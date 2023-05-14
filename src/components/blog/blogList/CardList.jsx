import BlogCard from "@/components/blog/blogList/BlogCard";

export default ({ posts, num }) => {
    return (
        <article className="post text-[1rem] m-[20px] px-[1em] justify-center flex flex-col">
            <section className="card-container flex flex-wrap -mx-5">
                {posts.slice(0, num).map((post) => (
                    <BlogCard
                        key={post._id}
                        post={post}
                    />
                ))}
            </section>
        </article>
    );
};
