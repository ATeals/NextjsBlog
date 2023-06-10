"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toc } from "./Toc";
import { useRef, useState, useEffect } from "react";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

export default ({ post }) => {
    const [onMenu, setOnMenu] = useState(false);
    const menuRef = useRef(null);

    const clickHander = () => {
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
                    className={`dark:bg-[#1E1E1E] z-[1] w-[70%] fixed bottom-0 right-0 m-[25px] bg-[#ffffff] rounded-[10px]`}
                >
                    <Toc
                        post={post}
                        menuToggle={clickHander}
                    />
                </div>
            ) : (
                <div
                    onClick={clickHander}
                    className=" cursor-pointer md:hidden text-[#eeeff2] fixed bottom-0 right-0 m-[25px] w-[2.5em] h-[2.5em] bg-[#577cf1] rounded-[10px] flex items-center justify-center"
                >
                    📑
                </div>
            )}
        </>
    );
};
