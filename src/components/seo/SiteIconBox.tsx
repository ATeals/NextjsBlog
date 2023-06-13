import Link from "next/link";

export default ({ size }: { size: number }) => {
    return (
        <section className="m-2 flex justify-center space-x-2 mb-4">
            <Link href="https://github.com/ATeals">
                <img
                    className="rounded-[50%]"
                    alt=""
                    src={`https://www.google.com/s2/favicons?domain=https://github.com/ATeals&sz=${size}`}
                />
            </Link>
            <Link href="https://velog.io/@ateals_12">
                <img
                    alt=""
                    src={`https://www.google.com/s2/favicons?domain=https://velog.io/@ateals_12&sz=${size}`}
                />
            </Link>
            <Link href="mailto:ateals@icloud.com">
                <img
                    alt=""
                    src={`https://www.google.com/s2/favicons?domain=https://support.apple.com/ko-kr/mail&sz=${size}`}
                />
            </Link>
        </section>
    );
};
