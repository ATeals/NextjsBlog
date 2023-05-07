import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import Head from "next/head";

const pathList = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

export default function Layout({ children }) {
    const router = useRouter();
    const pathObject = {};
    pathList.map((item) => (pathObject[item.path] = item.title));

    return (
        <>
            <Head>
                <title>{router.query.slug || pathObject[router.asPath]} | Blog</title>
            </Head>
            <div className="root">
                <header>
                    <Nav />
                </header>

                <main>{children}</main>
            </div>
            <footer>&copy;</footer>
            <style jsx>{`
                .root {
                    background-color: #eeeff2;
                    width: 100vw;
                    height: 100vh;
                    position: relative;
                    font-size: 0.5vw;
                }
                header {
                    font-size: 1rem;
                    background-color: #eeeff2;
                    width: 100%;
                    height: 10%;
                    position: fixed;
                    color: #eeeff2;
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                    background: #577cf1;
                    box-shadow: 12px 12px 24px #4c6cd2, -12px -12px 24px #628cff;
                    z-index: 1;
                }

                main {
                    padding-top: 10vh;
                    width: 100%;
                    height: 100%;
                    overflow: scroll;
                }

                footer {
                    font-size: 1rem;
                    background-color: #656a7e;
                    width: 100%;
                    height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    );
}
