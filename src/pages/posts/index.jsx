import { allPosts } from "contentlayer/gererated";
import BlogPost from "@/components/blogPost/BlogPost";
import { getCollaction } from "../../components/dataSet/setPostData";
import Link from "next/link";

export default ({ CollectionList }) => {
    return (
        <>
            test2
            {/* <div className="p-[2em]">
                {CollectionList.map((item) => {
                    return (
                        <Link href={`posts/${item._raw.flattenedPath}`}>
                            <h1>{item.title}</h1>
                            <h1>{item.description}</h1>
                            <h1>{item.posts.length}</h1>
                        </Link>
                    );
                })}
            </div> */}
        </>
    );
};

export const getStaticProps = async () => {
    //allPosts => 해당 경로의 mdx파일을 배열에 담아서 전송해줌!
    // const CollectionList = getCollaction();
    const CollectionList = allPosts;

    return {
        props: {
            CollectionList,
        },
    };
};
