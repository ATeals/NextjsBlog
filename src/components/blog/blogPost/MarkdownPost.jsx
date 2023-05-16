import { useMDXComponent } from "next-contentlayer/hooks";
import TagList from "./TagList";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post);
    return (
        <>
            <MDXComponent components={TagList} />
        </>
    );
};
