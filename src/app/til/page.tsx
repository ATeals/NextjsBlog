import BookMark, { SkeletonBookmark } from "@/components/BookMark";
import BookMark_API from "@/components/BookMark_API";
import { Suspense } from "react";

export default () => {
    return (
        <>
            <Suspense fallback={<SkeletonBookmark />}>
                <BookMark url="https://www.youtube.com/watch?v=HbTTDJFn-k4" />
            </Suspense>
        </>
    );
};
