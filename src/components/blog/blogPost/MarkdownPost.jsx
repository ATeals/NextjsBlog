import { useMDXComponent } from "next-contentlayer/hooks";
import TagList from "./TagList";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post);
    return (
        <>
            <div>
                <MDXComponent components={TagList} />
            </div>
            <style jsx>
                {`
                    aside {
                        color: red;
                    }
                `}
            </style>
        </>
    );
};
