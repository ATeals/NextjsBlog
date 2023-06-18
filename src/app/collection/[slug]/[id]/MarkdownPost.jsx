import { useMDXComponent } from "next-contentlayer/hooks";
import tagList from "./tagList";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post);
    return <MDXComponent components={tagList} />;
};
