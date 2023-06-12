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

export { h1, h2, h3 };
