import BlogCard from "@/components/blog/blogList/BlogCard";

export default ({ posts, num }) => {
    return (
        <article className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 text-[1rem] m-[20px] px-[1em] flex-col">
            {posts.slice(0, num).map((post) => (
                <section
                    key={post._id}
                    className="card-container flex flex-wrap -mx-5"
                >
                    <BlogCard post={post} />
                </section>
            ))}
        </article>
    );
};
