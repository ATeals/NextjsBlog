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
                <title>{router.query.slug} | Blog</title>
            </Head>
            <header>
                <h1>{pathObject[router.query.slug]}</h1>
                <Nav />
            </header>

            <div>{children}</div>
        </>
    );
}
