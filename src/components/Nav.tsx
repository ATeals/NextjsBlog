"use client";

import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

export default function Nav() {
    return (
        <>
            <nav className="flex items-center justify-between text-[1rem] p-[0.5em]">
                <Link href="/">
                    <h1 className="font-bebas-neue text-[2em] font-bold">Teal's Log</h1>
                </Link>
                <div className="flex items-center justify-center mx-[10px] [&>*]:mr-[10px]">
                    <Link href="/tags">
                        <div>Tags</div>
                    </Link>
                    <Link href="/collection">
                        <div>Collection</div>
                    </Link>

                    <DarkModeBtn />
                </div>
            </nav>
        </>
    );
}
