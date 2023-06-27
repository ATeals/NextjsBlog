import BookMark, { SkeletonBookmark } from "@/components/MDXComponentTags/BookMark";
import { Suspense } from "react";

export function a({ node, children, ...props }) {
    return (
        <>
            <a
                className="italic font-bold mx-1 text-[#292E85] underline"
                style={
                    {
                        // marginBottom: "10px",
                    }
                }
                {...props}
            >
                {children}
            </a>
        </>
    );
}

export function del({ node, children, ...props }) {
    return (
        <>
            {typeof children === typeof "" ? (
                <del {...props}>{children}</del>
            ) : (
                <Suspense fallback={<SkeletonBookmark />}>
                    <BookMark
                        {...props}
                        url={children.props.href}
                    />
                </Suspense>
            )}
        </>
    );
}
