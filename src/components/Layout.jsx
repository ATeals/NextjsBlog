import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import Head from "next/head";
import navList from "./pathList";

export default function Layout({ children }) {
    const obj = {};
    navList.map(({ title, path }) => {
        return (obj[path] = title);
    });
    console.log(obj);
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{obj[router.pathname]} | Blog</title>
            </Head>
            <header>
                <h1>{obj[router.pathname]}</h1>
                <Nav />
            </header>

            <div>{children}</div>
        </>
    );
}
