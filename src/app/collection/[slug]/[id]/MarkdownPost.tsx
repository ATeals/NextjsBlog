import { useMDXComponent } from "next-contentlayer/hooks";
import tagList from "../../../../components/MDXComponentTags/tagList";
import { Post } from "contentlayer/gererated";

export default ({ post }: { post: string }) => {
    const MDXComponent = useMDXComponent(post);
    return <MDXComponent components={tagList as any} />;
};
