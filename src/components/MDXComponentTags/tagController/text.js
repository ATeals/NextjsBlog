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
        <div
            className="mx-5 mb-5 leading-8 md:text-[18px] text-[15px]"
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
