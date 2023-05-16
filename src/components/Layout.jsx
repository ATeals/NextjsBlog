import Nav from "@/components/Nav";
import Head from "next/head";
import Footer from "@/components/seo/Footer";

import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
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
                url: "https://nextjs-blog-ateals.vercel.app/images/logoImg.png",
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

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Ateal's Blog</title>
            </Head>
            <DefaultSeo {...DEFAULT_SEO} />
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
