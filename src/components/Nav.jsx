import Link from "next/link";
import navList from "./pathList";

export default function Nav() {
    return (
        <>
            {navList.map(({ title, path }) => {
                return (
                    <Link
                        href={path}
                        key={title}
                    >
                        {title}
                    </Link>
                );
            })}
        </>
    );
}
