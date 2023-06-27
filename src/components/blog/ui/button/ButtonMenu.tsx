"use client";

import DarkModeBtn from "@/components/nav/DarkModeBtn";
import MoveTop from "./MoveTop";

export default () => {
    return (
        <div className="flex my-[10px] [&>*]:p-[10px] [&>*]:m-1">
            <div className="rounded-[10px] shadowBottom w-[50px] h-[50px] flex justify-center items-center hover:cursor-pointer">
                <DarkModeBtn />
            </div>

            <MoveTop />
        </div>
    );
};
