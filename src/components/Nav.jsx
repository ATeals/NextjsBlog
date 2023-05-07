import Link from "next/link";

const PathList = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Blog",
        path: "/blog",
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
                            <div>
                                <Link
                                    href={path}
                                    key={title}
                                >
                                    {title}
                                </Link>
                            </div>
                        );
                    })}
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
            `}</style>
        </>
    );
}
