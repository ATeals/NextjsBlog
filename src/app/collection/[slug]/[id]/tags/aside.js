function blockquote({ node, children, ...props }) {
    return (
        <aside className="shadowBottom my-10 py-[20px] px-[10px] dark:bg-[#1E1E1E] bg-[#efefef] rounded-[10px]">
            {" "}
            //
            {children}
        </aside>
    );
}
