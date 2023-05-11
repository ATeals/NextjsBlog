import { allPosts } from "contentlayer/gererated";

export default () => {
    return (
        <>
            <article className="post">
                <h1>It's Home Page</h1>
            </article>
        </>
    );
};

// export const getStaticProps = async () => {
//     const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

//     return {
//         props: {
//             posts,
//         },
//     };
// };
