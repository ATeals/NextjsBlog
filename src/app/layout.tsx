import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Nav from "@/components/Nav";
import Footer from "@/components/seo/Footer";
import SideMenu from "@/components/seo/SideMenu";
import Head from "./Head";
import metaObj from "./metadata";

config.autoAddCss = false;
export const metadata = metaObj;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <Head />
            <body
                suppressHydrationWarning={true}
                className=" dark:bg-[#121212] dark:text-[#E0E0E0] w-screen min-h-screen relative flex flex-col"
            >
                <header className="shadowBottom mb-[10px] ">
                    <Nav />
                </header>

                <main className="mb-[150px] flex box-border w-full">
                    <aside className="w-[20%] m-[10px] hidden lg:block">
                        <SideMenu />
                    </aside>
                    <section className="w-full lg:w-[80%]">{children}</section>
                </main>
                <Footer />
            </body>
        </html>
    );
}
