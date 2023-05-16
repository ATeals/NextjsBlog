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

function a({ node, children, ...props }) {
    return (
        <a
            className="italic font-bold mx-1 text-[#292E85]"
            style={
                {
                    // marginBottom: "10px",
                }
            }
            {...props}
        >
            {children}
        </a>
    );
}

export { pre, p, strong, a };
