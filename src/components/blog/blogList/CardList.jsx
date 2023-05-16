import BlogCard from "@/components/blog/blogList/BlogCard";

export default ({ posts, num }) => {
    return (
        <article className=" @apply flex justify-center items-center post text-[1rem] m-[20px] px-[1em] flex-col">
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
