import Nav from "@/components/Nav";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Ateal's Blog</title>
            </Head>
            <div className="@apply min-h-screen relative flex aline-center flex-col">
                <header>
                    <Nav />
                </header>

                <main className="mb-[100px]">{children}</main>
                <footer className="absolute bottom-0 w-screen  py-[20px] border-t-black border-t border-solid flex aline-center justify-center py-[30px]">&copy; Ateals</footer>
            </div>
        </>
    );
}
