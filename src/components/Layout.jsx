import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import Head from "next/head";
import { setPath } from "./PathList";

export default function Layout({ children }) {
    const router = useRouter();
    const pathObject = setPath();
    console.log(router);

    return (
        <>
            <Head>
                <title>{router.query.slug || pathObject[router.asPath]} | Blog</title>
            </Head>
            <header>
                <h1>{router.query.slug || pathObject[router.asPath]}</h1>
                <Nav />
            </header>

            <div>{children}</div>
        </>
    );
}
