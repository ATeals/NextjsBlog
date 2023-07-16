"use client";

import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

export default function Nav() {
    return (
        <>
            <nav className="flex items-center justify-between text-[1rem] p-[0.5em]">
                <Link href="//">
                    <h1 className="font-bebas-neue text-[2em] font-bold mx-[20px]">Teal's Log</h1>
                </Link>
                <div className="flex items-center justify-center items-center mx-[10px] [&>*]:mx-[10px] text-[20px]">
                    <Link href="/collection">
                        <i className="bi bi-book"></i>
                    </Link>

                    <Link href="/tags">
                        <i className="bi bi-tags "></i>
                    </Link>

                    <DarkModeBtn />
                </div>
            </nav>
        </>
    );
}
