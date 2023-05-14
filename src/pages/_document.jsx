import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            // html 태그에 언어 설정
            <Html lang="ko">
                <Head />
                <body className="md:px-[10%]">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
