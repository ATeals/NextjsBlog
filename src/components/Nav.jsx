import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const PathList = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "posts",
        path: "/posts",
    },
];

export default function Nav() {
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
            <nav>
                <Link href="/">
                    <h1>Ateal's Blog</h1>
                </Link>
                <div>
                    {PathList.map(({ title, path }) => {
                        return (
                            <Link
                                href={path}
                                key={title}
                            >
                                <div>{title}</div>
                            </Link>
                        );
                    })}
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
                </div>
            </nav>

            <style jsx>{`
                nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 1rem;
                    padding: 0.5em;
                }
                h1 {
                    font-size: 2em;
                    font-weight: 600;
                }
                div {
                    margin: 0 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
}
