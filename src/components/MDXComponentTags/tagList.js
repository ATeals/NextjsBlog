import { h1, h2, h3, hr } from "./tagController/h";
import { blockquote } from "./tagController/blockquote";
import { ul, li, ol } from "./tagController/list";
import { p, strong, em } from "./tagController/text";
import { table, td, th, tr } from "./tagController/table";
import { code, pre } from "./tagController/code";
import { a } from "./tagController/LinkBlock";

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
    hr,
};

export default tagList;
