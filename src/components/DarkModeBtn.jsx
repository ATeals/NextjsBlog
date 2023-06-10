"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            {isDarkMode ? (
                <FontAwesomeIcon
                    icon={faSun}
                    size="2x"
                    className="ml-[10px]"
                    onClick={modeToggle}
                />
            ) : (
                <FontAwesomeIcon
                    icon={faMoon}
                    size="2x"
                    className="ml-[10px]"
                    onClick={modeToggle}
                />
            )}
        </>
    );
};
