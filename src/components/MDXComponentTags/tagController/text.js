function strong({ node, children, ...props }) {
    return (
        <strong
            className=" dark:text-[#577cf1] text-[#292E85]"
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
        <div
            className="mx-5 mb-5 leading-8 text-sm md:text-[16px]"
            style={
                {
                    // marginBottom: "10px",
                }
            }
            {...props}
        >
            {children}
        </div>
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

export { p, strong, em };
