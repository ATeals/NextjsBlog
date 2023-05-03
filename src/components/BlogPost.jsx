import Link from "next/link";

export default ({ date, title, des, slug }) => {
    return (
        <Link
            href={`/blog/${slug}`}
            passHref
        >
            <div>
                <div>{title}</div>
                <div>{des}</div>
                <div>{date}</div>
            </div>
        </Link>
    );
};
