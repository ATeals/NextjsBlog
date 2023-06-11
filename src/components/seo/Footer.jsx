import Link from "next/link";

export default () => {
    return (
        <footer className=" shadowTop  dark:border-t-[#A1AAC6] absolute bottom-0 w-[100%] flex aline-center justify-center py-[30px] flex-col">
            <div className="flex justify-center">&copy; Ateals </div>
            <div className="flex justify-center">
                <Link href="https://github.com/ATeals">
                    <img
                        className="rounded-[50%] mr-[5px]"
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
            </div>
        </footer>
    );
};
