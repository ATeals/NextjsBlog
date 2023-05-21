import Nav from "@/components/Nav";
import Head from "next/head";
import Footer from "@/components/seo/Footer";
import { DSeo } from "./seo/seoObject";

export default function Layout({ children }) {
    return (
        <>
            <DSeo />
            <Head>
                <title>Ateal's Blog</title>
            </Head>

            <div className="@apply min-h-screen relative flex flex-col">
                <header>
                    <Nav />
                </header>

                <main className="mb-[100px] @apply">{children}</main>
                <Footer />
            </div>
        </>
    );
}
