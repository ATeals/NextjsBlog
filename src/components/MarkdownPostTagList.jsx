import SyntaxHighlighter from "react-syntax-highlighter";
import materialDark from "react-syntax-highlighter/dist/cjs/styles/hljs";

//인용문
function blockquote({ node, children, ...props }) {
    return (
        <div
            style={{
                background: "#f0f0f0",
                padding: "1px 15px",
                borderRadius: "10px",
                display: "inline",
            }}
            {...props}
        >
            {children}
        </div>
    );
}
function strong({ node, children, ...props }) {
    return (
        <strong
            style={{
                background: "tomato",
                padding: "1px 15px",
                borderRadius: "10px",
            }}
            {...props}
        >
            {children}
        </strong>
    );
}
//코드블럭
function code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return inline ? (
        // 강조
        <code
            style={{
                background: "var(--highlight-color)",
                padding: "2px",
            }}
            {...props}
        >
            {children}
        </code>
    ) : match ? (
        // 코드
        // 언어가 선택됨
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, "")}
            style={materialDark}
            language={match[1]}
            PreTag="div"
            {...props}
        />
    ) : (
        // 언어가 선택되지 않음
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, "")}
            style={materialDark}
            language="textile"
            PreTag="div"
            {...props}
        />
    );
}

const TagList = {
    blockquote,
    code,
    strong,
};
export default TagList;
