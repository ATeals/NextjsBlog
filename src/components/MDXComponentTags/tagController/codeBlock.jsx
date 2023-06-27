"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default ({ match, children, ...props }) => {
    const onclick = () => {
        if (window) {
            window.navigator.clipboard.writeText(children);
        }
        console.log("Asdasd");
    };

    return (
        <>
            <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                {...props}
                style={vscDarkPlus}
                className="text-[15px] relative"
            >
                {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
            {match ? (
                <button
                    onClick={onclick}
                    className="transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 text-[gray] p-1 text-[25px] rounded-[8px] m-5"
                >
                    <i className="bi bi-clipboard"></i>
                </button>
            ) : null}
        </>
    );
};
