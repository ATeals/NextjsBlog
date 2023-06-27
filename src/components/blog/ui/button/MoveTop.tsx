"use Client";

import { useEffect, useState } from "react";

export default () => {
    return (
        <div
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-[10px] shadowBottom w-[50px] h-[50px] flex justify-center items-center hover:cursor-pointer"
        >
            <i className="bi bi-arrow-up"></i>
        </div>
    );
};
