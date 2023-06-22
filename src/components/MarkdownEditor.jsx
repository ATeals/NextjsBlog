"use client";

import tagList from "@/app/collection/[slug]/[id]/tagList";
import React, { Component, useEffect, useState } from "react";
import { ReactElement, ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default () => {
    const [input, setInput] = useState("");
    const [post, setPost] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    };

    const addblockquote = () => {
        setInput((e) => (e += "\n" + "```language\n\n```"));
    };

    useEffect(() => {
        setPost(input.replaceAll("\n", "\n\n"));
    }, [input]);

    return (
        <>
            <div>
                <input
                    type="button"
                    value={"버튼!"}
                    className="bg-[gray] text-[white]"
                    onClick={addblockquote}
                />
            </div>
            <div className="flex ">
                <section className="w-[50%] h-full bg-darkBg shadowBottom p-2">
                    <textarea
                        className="w-full bg-[gray]"
                        value={input}
                        onChange={onChange}
                    />
                </section>
                <section className="w-[50%] shadowBottom p-2">
                    {true && (
                        <>
                            <ReactMarkdown
                                children={post}
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    ...tagList,
                                    del({ node, children, ...props }) {
                                        return (
                                            <>
                                                <del {...props}>{children}</del>
                                            </>
                                        );
                                    },
                                }}
                            ></ReactMarkdown>
                        </>
                    )}
                </section>
            </div>

            <section>
                <div>{input}</div>
            </section>
        </>
    );
};
