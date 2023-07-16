"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export default () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const modeToggle = () => {
        document.querySelector("html").classList.toggle("dark");
        setIsDarkMode((i) => !i);
    };
    useEffect(() => {
        if (localStorage.getItem("darkMode") === "true") {
            setIsDarkMode(localStorage.getItem("darkMode"));
        }
    }, []);

    useLayoutEffect(() => {
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

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
