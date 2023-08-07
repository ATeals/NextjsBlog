import { useEffect, useState } from "react";

export default () => {
    const [isDark, setIsDark] = useState<Boolean | undefined>(undefined);
    const onClick = () => {
        setIsDark((i) => !i);
    };

    useEffect(() => {
        if (isDark !== undefined) {
            if (isDark) {
                document.querySelector("html")?.classList.add("dark");
                localStorage.setItem("darkMode", "true");
            } else {
                document.querySelector("html")?.classList.remove("dark");
                localStorage.setItem("darkMode", "false");
            }
        } else {
            if (localStorage.getItem("darkMode") === "true") setIsDark(true);
            else if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("isDark") !== "false") setIsDark(true);
            else setIsDark(false);
        }
    }, [isDark]);

    return [isDark, setIsDark];
};
