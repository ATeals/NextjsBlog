import { useMDXComponent } from "next-contentlayer/hooks";
import tagList from "../../../../components/MDXComponentTags/tagList";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post);
    return <MDXComponent components={tagList} />;
};
