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

export { ul, li };
