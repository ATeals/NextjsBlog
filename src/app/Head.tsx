export default () => {
    return (
        <>
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

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
                />
                <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                ></meta>
                <title>Ateal's Blog</title>
            </head>
        </>
    );
};
