import LineItem from "./LineItem";

export default ({ posts }) => {
    return (
        <>
            <section className="p-[20px]">
                {posts.map((post) => (
                    <LineItem
                        key={post._id}
                        post={post}
                    />
                ))}
            </section>
        </>
    );
};
