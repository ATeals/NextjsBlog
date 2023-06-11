import Link from "next/link";

export default () => {
    return (
        <footer className=" shadowTop  dark:border-t-[#A1AAC6] absolute bottom-0 w-[100%] flex aline-center justify-center py-[30px] flex-col">
            <div className="m-2 flex justify-center items-center space-x-2">
                <div className="flex justify-center text-[18px]">&copy; Ateals </div>
                <Link href="https://github.com/ATeals">
                    <img
                        className="rounded-[50%]"
                        alt=""
                        src="https://www.google.com/s2/favicons?domain=https://github.com/ATeals&sz=24"
                    />
                </Link>
                <Link href="https://velog.io/@ateals_12">
                    <img
                        alt=""
                        src="https://www.google.com/s2/favicons?domain=https://velog.io/@ateals_12&sz=24"
                    />
                </Link>
                <Link href="mailto:ateals@icloud.com">
                    <img
                        alt=""
                        src="https://www.google.com/s2/favicons?domain=https://support.apple.com/ko-kr/mail&sz=24"
                    />
                </Link>
            </div>
        </footer>
    );
};
