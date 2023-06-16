import BookMark from "@/components/BookMark";

function strong({ node, children, ...props }) {
    return (
        <strong
            className="dark:bg-[#0D0F30] dark:text-[#cfcfcf] bg-[#cfcfcf] text-[#292E85] mx-1"
            style={{
                padding: "1px 5px",
                borderRadius: "10px",
                fontWeight: 500,
                background: "",
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

function em({ node, children, ...props }) {
    return (
        <em
            className="text-[#858585]"
            style={
                {
                    // marginBottom: "10px",
                }
            }
            {...props}
        >
            {children}
        </em>
    );
}

export { pre, p, strong, em };
