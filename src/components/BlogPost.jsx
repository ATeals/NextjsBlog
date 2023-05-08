import Link from "next/link";

export default ({ date, title, des, slug }) => {
    return (
        <>
            <Link
                href={`/posts/${slug}`}
                passHref
            >
                <div className="post">
                    <div className="title">
                        <h1>{title}</h1>
                        <h6>{date}</h6>
                    </div>
                    <h4>{des}</h4>
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
                    position: relative;
                }
                .title {
                    border-bottom: 1px solid #eeeff2;
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                h1 {
                    font-size: 1.7em;
                    font-weight: 600;
                }

                h4 {
                    font-size: 1em;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.6);
                }

                h6 {
                    font-size: 0.5em;
                    font-weight: 400;
                    margin: 0 10px;
                }
            `}</style>
        </>
    );
};
