//인용문
function blockquote({ node, children, ...props }) {
    return (
        <blockquote
            className="my-10 p-1"
            style={{
                // background: "#577CF1",
                // padding: "10px 15px",
                // borderRadius: "10px",
                // display: "inline-block",
                // margin: "20px 0",
                // color: "#EEEFF2",
                borderLeft: "5px solid #577CF1",
                marginLeft: "15px",
                background: "#efefef",
            }}
            {...props}
        >
            {children}
        </blockquote>
    );
}

export { blockquote };
