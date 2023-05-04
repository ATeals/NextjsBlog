import Link from "next/link";

export default ({ date, title, des, slug }) => {
    return (
        <>
            <Link
                href={`/blog/${slug}`}
                passHref
            >
                <div className="post">
                    <h1>{title}</h1>
                    <h4>{des}</h4>
                    <h6>{date}</h6>
                </div>
            </Link>
            <style jsx>{`
                .post {
                    font-size: 1rem;
                    width: 100%;
                    height: 40%;
                    padding: 10px;
                    margin: 10px;
                    border-radius: 10px;
                    background-color: #ffffff;
                    position: relative;
                }

                h1 {
                    font-size: 1.7em;
                    font-weight: 600;
                    border-bottom: 1px solid #eeeff2;
                    margin-bottom: 10px;
                }

                h4 {
                    font-size: 1em;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.6);
                }

                h6 {
                    font-size: 0.5em;
                    font-weight: 400;
                    display: flex;
                    justify-content: end;
                }
            `}</style>
        </>
    );
};
