function h1({ node, children, ...props }) {
    return (
        <h1
            id={children}
            style={{
                fontSize: "2em",
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
                padding: "0.4em",
            }}
            {...props}
        >
            {children}
        </h3>
    );
}

function hr({ node, children, ...props }) {
    return <hr className="border-1 border-solid border-[#A1AAC6] mx-2 mb-10" />;
}

export { h1, h2, h3, hr };
