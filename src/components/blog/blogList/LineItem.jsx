import Link from "next/link";

export default ({ posts }) => {
    return (
        <>
            <section>
                {posts.map((post) => (
                    <Link
                        href={`/posts/${post._raw.flattenedPath}`}
                        passHref
                    >
                        <div className="post">
                            <div className="title">
                                <h1>{post.title}</h1>
                            </div>
                            <h4>{post.description}</h4>
                            <h4>글 개수: {post.posts.length}</h4>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
};
