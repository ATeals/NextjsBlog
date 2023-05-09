import Link from "next/link";

export default () => {
    return (
        <footer className="absolute bottom-0 w-screen  py-[20px] border-t-black border-t border-solid flex aline-center justify-center py-[30px] flex-col">
            <div className="flex justify-center">&copy; Ateals </div>
            <div className="flex justify-center">
                <Link href="https://github.com/ATeals">
                    <img
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
