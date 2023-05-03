import { useMDXComponent } from "next-contentlayer/hooks";
import TagList from "./MarkdownPostTagList";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post);
    return <MDXComponent components={TagList} />;
};
