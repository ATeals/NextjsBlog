import CodeBlock from "./codeBlock";

function code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
        <CodeBlock
            match={match}
            children={children}
            {...props}
            className="bg-[#2B303B]"
        />
    ) : (
        <code
            className="text-[gray]"
            {...props}
        >
            {children}
        </code>
    );
}

function pre({ node, children, ...props }) {
    return (
        <pre
            className="group bg-[#1E1E1E] mx-2 my-8 py-8 p-1 rounded-[10px] relative hover:[&>button]:scale-105"
            {...props}
        >
            {children}
        </pre>
    );
}

export { code, pre };
