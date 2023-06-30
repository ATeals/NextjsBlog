"use client";

import { Toc } from "./Toc";
import { useRef, useState, useEffect } from "react";
import ButtonMenu from "../ui/button/ButtonMenu";

export default ({ post }) => {
    const [onMenu, setOnMenu] = useState(false);
    const menuRef = useRef(null);

    const clickHander = (e) => {
        if (e) e.stopPropagation();
        setOnMenu((i) => !i);
    };

    const menuCloseHandler = ({ target }) => {
        if (onMenu && !menuRef.current.contains(target)) setOnMenu(false);
    };

    useEffect(() => {
        window.addEventListener("click", menuCloseHandler);
        return () => {
            window.removeEventListener("click", menuCloseHandler);
        };
    });

    return (
        <>
            {onMenu ? (
                <div
                    ref={menuRef}
                    className={`dark:bg-darkBg z-[999] w-[70%] fixed bottom-0 right-0 m-[25px] bg-[#ffffff] rounded-[10px]`}
                >
                    <Toc
                        post={post}
                        menuToggle={clickHander}
                    />
                    <ButtonMenu />
                </div>
            ) : (
                <div className="bg-[#cfcfcf] dark:bg-[#1e1e1e] md:hidden fixed bottom-0 right-0 h-[4em] m-3 z-[2] [&>*]:m-2  cursor-pointer rounded-[10px] w-[50px] h-[50px] flex justify-center items-center hover:cursor-pointer">
                    <i
                        className="bi bi-list-columns-reverse"
                        onClick={clickHander}
                    ></i>
                </div>
            )}
        </>
    );
};
