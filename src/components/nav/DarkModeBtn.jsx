"use client";

import useDark from "@/hooks/useDark";
import { useEffect, useState } from "react";

export default () => {
    const [isDarkMode, setIsDarkMode] = useDark();

    const modeToggle = () => {
        document.querySelector("html").classList.toggle("dark");
        setIsDarkMode((i) => !i);
    };

    return (
        <>
            {isDarkMode ? (
                // <FontAwesomeIcon
                //     icon={faSun}
                //     size="2x"
                //     className="ml-[10px]"
                //     onClick={modeToggle}
                // />
                <i
                    className="bi bi-brightness-high text-[20px]"
                    onClick={modeToggle}
                ></i>
            ) : (
                // <FontAwesomeIcon
                //     icon={faMoon}
                //     size="2x"
                //     className="ml-[10px]"
                //     onClick={modeToggle}
                // />
                <i
                    className="bi bi-moon text-[20px]"
                    onClick={modeToggle}
                ></i>
            )}
        </>
    );
};
