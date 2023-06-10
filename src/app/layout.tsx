import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Nav from "@/components/Nav";
import Footer from "@/components/seo/Footer";

config.autoAddCss = false;

export const metadata = {
    title: "Ateals Blog",
    description: "Welcome my Blog!",
    canonical: "https://www.carrotins.com",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://nextjs-blog-ateals.vercel.app/",
        title: "Ateals Blog",
        site_name: "Ateals Blog",
        images: [
            {
                url: "https://nextjs-blog-ateals.vercel.app/images/logoImg.jpg",
                width: 1900,
                height: 630,
                alt: "og: 이미지",
            },
        ],
    },
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function() {
                            if(window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("darkMode") !== "false" ){
                                localStorage.setItem("darkMode", "true");
                            } 
                            if (localStorage.getItem("darkMode") === "true") {
                                document.querySelector("html").classList.toggle("dark");
                            }
                            if (localStorage.getItem("darkMode") === null) {
                                localStorage.setItem("darkMode", false);
                            }
                           
                      })()`,
                    }}
                ></script>
                <link
                    rel="icon"
                    href="https://nextjs-blog-ateals.vercel.app/favicon.ico"
                />
                <meta
                    name="google-site-verification"
                    content="Vf0Y1AEjfuPI3lth_ZcM3F4TI0bW9UxJ_7ZJQm_pC4w"
                />
                <meta
                    name="naver-site-verification"
                    content="514746f4453f87d737d5f285ed615084022639fc"
                />

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&family=Monomaniac+One&family=Nunito&display=swap"
                    rel="stylesheet"
                />

                <title>Ateal's Blog</title>
            </head>
            <body
                suppressHydrationWarning={true}
                className="md:px-[10%] dark:bg-[#121212] dark:text-[#E0E0E0] min-h-screen relative flex flex-col"
            >
                <header>
                    <Nav />
                </header>

                <main className="mb-[100px] @apply">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
