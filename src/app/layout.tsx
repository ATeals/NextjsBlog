import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/seo/Footer";
import SideMenu from "@/components/seo/SideMenu";
import Head from "./Head";
import metaObj from "./metadata";

export const metadata = metaObj;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <Head />
            <body
                suppressHydrationWarning={true}
                className=" dark:bg-[#1E1E1E] dark:text-[#e0e4e6] w-screen min-h-screen relative flex flex-col"
            >
                <header className="shadowBottom mb-[10px] w-full bg-[#ffffff] z-10 fixed md:relative">
                    <Nav />
                </header>

                <main className="mb-[150px] lg:flex box-border w-full mt-[70px] md:mt-0">
                    <section className="w-full lg:w-[78%] box-border order-2">{children}</section>
                    <aside className="lg:w-[20%] m-[10px] order-1">
                        <SideMenu />
                    </aside>
                </main>
                <Footer />
            </body>
        </html>
    );
}
