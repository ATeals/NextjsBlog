"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import tagList from "@/app/collection/[...slug]/tagList";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post);
    return (
        <>
            <MDXComponent components={tagList} />
        </>
    );
};
