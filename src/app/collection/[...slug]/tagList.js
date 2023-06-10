import { h1, h2, h3 } from "./tags/h";
import { blockquote } from "./tags/blockquote";
import { ul, li, ol } from "./tags/list";
import { pre, p, strong, a, em } from "./tags/text";
import { table, td, th, tr } from "./tags/table";
import { code } from "./tags/codeBlock";

function aside({ node, children, ...props }) {
    return (
        <aside
            className="my-10 py-[20px] px-[10px] dark:bg-[#ffffff] bg-[#efefef] rounded-[10px]"
            {...props}
        >
            {children}
        </aside>
    );
}

const tagList = {
    blockquote,
    strong,
    ul,
    ol,
    li,
    h1,
    pre,
    p,
    h2,
    h3,
    table,
    td,
    tr,
    th,
    a,
    em,
    aside,
    code,
};

export default tagList;
