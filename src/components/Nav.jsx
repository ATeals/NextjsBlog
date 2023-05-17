import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

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
                    <DarkModeBtn />
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
