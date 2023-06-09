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

function ol({ node, children, ...props }) {
    return (
        <ol
            style={{
                margin: "10px",
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                paddingInlineStart: "40px",
                listStyleType: "upper-roman",
            }}
            {...props}
        >
            {children}
        </ol>
    );
}

function li({ node, children, ...props }) {
    return (
        <li
            style={{
                padding: "5px 10px",
            }}
            {...props}
        >
            {children}
        </li>
    );
}

export { ul, li, ol };
