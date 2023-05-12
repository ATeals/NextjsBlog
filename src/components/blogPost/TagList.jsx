import SyntaxHighlighter from "react-syntax-highlighter";
import { ocean } from "react-syntax-highlighter/dist/cjs/styles/hljs";

//인용문
function blockquote({ node, children, ...props }) {
    return (
        <blockquote
            className="my-10 p-1"
            style={{
                // background: "#577CF1",
                // padding: "10px 15px",
                // borderRadius: "10px",
                // display: "inline-block",
                // margin: "20px 0",
                // color: "#EEEFF2",
                borderLeft: "5px solid #577CF1",
                marginLeft: "15px",
                background: "#efefef",
            }}
            {...props}
        >
            {children}
        </blockquote>
    );
}
function strong({ node, children, ...props }) {
    return (
        <strong
            style={{
                color: "#292E85",
                padding: "1px 5px",
                borderRadius: "10px",
                fontWeight: 500,
                background: "#cfcfcf",
            }}
            {...props}
        >
            {children}
        </strong>
    );
}

function p({ node, children, ...props }) {
    return (
        <p
            className="mx-5 mb-2 leading-8"
            style={
                {
                    // marginBottom: "10px",
                }
            }
            {...props}
        >
            {children}
        </p>
    );
}

function h1({ node, children, ...props }) {
    return (
        <h1
            id={children}
            style={{
                fontSize: "2em",
                borderBottom: "1px solid #A1AAC6",
                margin: "1em 0",
                padding: "0.4em",
                fontWeight: "700",
            }}
            {...props}
        >
            {children}
        </h1>
    );
}
function h2({ node, children, ...props }) {
    return (
        <h2
            id={children}
            style={{
                fontSize: "1.5em",
                borderBottom: "1px solid #A1AAC6",
                margin: "1em 0",
                padding: "0.4em",
                fontWeight: "600",
            }}
            {...props}
        >
            {children}
        </h2>
    );
}
function h3({ node, children, ...props }) {
    return (
        <h3
            id={children}
            style={{
                fontSize: "1.5em",
                margin: "1em 0",
                padding: "0.4em",
            }}
            {...props}
        >
            {children}
        </h3>
    );
}

function ul({ node, children, ...props }) {
    return (
        <ul
            style={{
                margin: "10px",
                display: "block",
                listStyleType: "disc",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                paddingInlineStart: "40px",
            }}
            {...props}
        >
            {children}
        </ul>
    );
}

function li({ node, children, ...props }) {
    return (
        <li
            style={{
                padding: "5px 10px",
                listStyleType: "disc",
            }}
            {...props}
        >
            {children}
        </li>
    );
}

function pre({ node, children, ...props }) {
    return (
        <pre
            style={{
                padding: "20px 20px",
                background: "#2B303B",
                borderRadius: " 10px",
                margin: "30px 10px",
            }}
            {...props}
        >
            {children}
        </pre>
    );
}

//코드블럭;
function code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
        <SyntaxHighlighter
            language={match[1]}
            PreTag="div"
            {...props}
            style={ocean}
        >
            {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
    ) : (
        <code {...props}>{children}</code>
    );
}

const TagList = {
    blockquote,
    code,
    strong,
    ul,
    li,
    h1,
    pre,
    p,
    h2,
    h3,
};
export default TagList;
