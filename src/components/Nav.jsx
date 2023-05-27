import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

export default function Nav() {
    return (
        <>
            <nav>
                <Link href="/">
                    <h1 className="main">Teal's Log</h1>
                </Link>
                <div>
                    <Link href="/tags">
                        <div>Tags</div>
                    </Link>
                    <Link href="/posts">
                        <div>Collection</div>
                    </Link>

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
                .main {
                    font-family: "Bebas Neue", sans-serif;
                }
            `}</style>
        </>
    );
}
