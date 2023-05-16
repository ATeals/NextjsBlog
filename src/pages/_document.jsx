import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    return (
        // html 태그에 언어 설정
        <Html
            lang="ko"
            className=""
        >
            <Head>
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
            </Head>
            <body className="md:px-[10%] dark:bg-[#121212] dark:text-[#E0E0E0]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
