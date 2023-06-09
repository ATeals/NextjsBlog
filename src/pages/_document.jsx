import { Html, Head, Main, NextScript } from "next/document";

const ScriptTag = () => {
    const codeToRunOnClient = `(function() {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("darkMode") !== "false" ){
            localStorage.setItem("darkMode", "true");
        } 
        if (localStorage.getItem("darkMode") === "true") {
            document.querySelector("html").classList.toggle("dark");
        }
        if (localStorage.getItem("darkMode") === null) {
            localStorage.setItem("darkMode", false);
        }
       
  })()`;

    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

const Document = () => {
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

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&family=Monomaniac+One&family=Nunito&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="md:px-[10%] dark:bg-[#121212] dark:text-[#E0E0E0]">
                <ScriptTag />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
