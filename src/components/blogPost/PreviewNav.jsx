import Link from "next/link";

export default ({ preNavProp: { prePost, nextPost } }) => {
    return (
        <div className="flex align-center justify-between @apply mx-1 my-2.5">
            {prePost ? <Link href={`/posts/${prePost._raw.flattenedPath}`}>{`< ${prePost.title}`}</Link> : <div></div>}
            {nextPost ? <Link href={`/posts/${nextPost._raw.flattenedPath}`}>{`${nextPost.title} >`}</Link> : <div></div>}
        </div>
    );
};
