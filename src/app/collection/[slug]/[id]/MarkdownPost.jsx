"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import tagList from "./tagList";
import { Suspense } from "react";

export default ({ post }) => {
    const MDXComponent = useMDXComponent(post);
    return (
        <Suspense fallback={<h1>loading..</h1>}>
            <MDXComponent components={tagList} />
        </Suspense>
    );
};
