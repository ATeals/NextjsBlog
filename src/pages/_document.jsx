import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRef } from "react";

// class MyDocument extends Document {
//     render() {
//         return (
//             // html 태그에 언어 설정
//             <Html
//                 lang="ko"
//                 className="dark"
//             >
//                 <Head />
//                 <body className="md:px-[10%] dark:bg-[#121212] dark:text-[#E0E0E0]">
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         );
//     }
// }

const MyDocument = () => {
    return (
        // html 태그에 언어 설정
        <Html
            lang="ko"
            className=""
        >
            <Head />
            <body className="md:px-[10%] dark:bg-[#121212] dark:text-[#E0E0E0]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
