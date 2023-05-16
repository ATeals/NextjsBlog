function table({ node, children, ...props }) {
    return (
        <table
            style={{
                border: "1px #a39485 solid",
                fontSize: ".9em",
                boxShadow: " 0 2px 5px rgba(0,0,0,.25)",
                width: "90%",
                borderCollapse: "collapse",
                borderRadius: "5px",
                overflow: "hidden",
                margin: "5%",
            }}
            {...props}
        >
            {children}
        </table>
    );
}

function td({ node, children, ...props }) {
    return (
        <td
            style={{
                border: "1px solid",
                borderCollapse: "collapse",
                textAlign: "center",
                padding: "2px",
            }}
            {...props}
        >
            {children}
        </td>
    );
}

function tr({ node, children, ...props }) {
    return (
        <tr
            className="dark:bg-[#121212] dark:text-[#e0e0e0]"
            style={{
                border: "1px solid",
                borderCollapse: "collapse",
                textAlign: "center",
                padding: "2px",
            }}
            {...props}
        >
            {children}
        </tr>
    );
}

function th({ node, children, ...props }) {
    return (
        <th
            style={{
                backgroundColor: "#577cf1",
                color: "#f7f7f7",
                padding: "10px 5px",
                border: "1px solid",
            }}
            {...props}
        >
            {children}
        </th>
    );
}

export { table, td, tr, th };
