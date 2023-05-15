//인용문
function blockquote({ node, children, ...props }) {
    return (
        <blockquote
            className="my-10 p-1 dark:bg-[#1E1E1E] bg-[#efefef]"
            style={{
                // background: "#577CF1",
                // padding: "10px 15px",
                // borderRadius: "10px",
                // display: "inline-block",
                // margin: "20px 0",
                // color: "#EEEFF2",
                borderLeft: "5px solid #577CF1",
                marginLeft: "15px",
            }}
            {...props}
        >
            {children}
        </blockquote>
    );
}

function aside({ node, children, ...props }) {
    return (
        <aside
            className="my-10 p-1 dark:bg-[#1E1E1E] bg-[#efefef]"
            style={{
                // background: "#577CF1",
                // padding: "10px 15px",
                // borderRadius: "10px",
                // display: "inline-block",
                // margin: "20px 0",
                // color: "#EEEFF2",
                display: "block",
                margin: "15px",
                width: "90%",
                padding: "10px",
                border: "1px solid #577CF1",
            }}
            {...props}
        >
            {children}
        </aside>
    );
}

export { blockquote, aside };
