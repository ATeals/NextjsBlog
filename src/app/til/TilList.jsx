import Link from "next/link";
import { getDb } from "@/lib/notion/getDb";

export const revalidate = 0;

export default async () => {
    const db = await getDb();
    // console.log(new Date(db[0].created_time), new Date("2023-06-19"));
    // console.log(formatDate(db[0].created_time));
    console.log(db);
    return (
        <ul className="flex flex-col">
            {db &&
                db.map((i) => (
                    <li key={i.id}>
                        <Link
                            href={i.url}
                            target="_blank"
                        >
                            <article className="shadowBottom m-2 p-5 rounded-[10px] hover:scale-105">
                                <h1 className="text-[24px] font-bold">{i.properties.name.title[0].plain_text}</h1>

                                <div className="flex">
                                    {i.properties.tags.multi_select.map((tag) => (
                                        <div
                                            key={tag.id}
                                            className="flex justify-center items-center m-2"
                                        >
                                            <div
                                                className="mr-2 w-[10px] h-[10px]"
                                                style={{
                                                    backgroundColor: `${tag.color}`, //
                                                    opacity: 0.4,
                                                }}
                                            ></div>
                                            <div>{tag.name + " "}</div>
                                        </div>
                                    ))}
                                </div>
                                <h4 className="text-[gray] opacity-[0.8]">{i.properties.date.date.start}</h4>
                            </article>
                        </Link>
                    </li>
                ))}
            {db.length === 0 ? (
                <article className="shadowBottom flex items-center justify-center m-2 p-5 rounded-[10px] hover:scale-105 text-[1.5rem]">
                    <i className="bi bi-tree-fill "></i>
                    <h1 className="font-bold ">TAKE A REST</h1>
                    <i className="bi bi-tree-fill "></i>
                </article>
            ) : null}
        </ul>
    );
};

export const SkeletonTilList = () => {
    return (
        <ul>
            {[1, 2, 3].map((i) => (
                <li>
                    <article className="shadowBottom m-2 p-5 rounded-[10px]">
                        <div className="text-[24px] font-bold mb-2">
                            <div className=" bg-[gray] h-[12px] animate-pulse w-[10%] h-[30px]"></div>
                        </div>

                        <div className="flex mb-2">
                            {[1, 2, 3].map((tag) => (
                                <div className="flex justify-center items-center m-2">
                                    <div className=" bg-[gray] h-[12px] animate-pulse w-[40px]"></div>
                                </div>
                            ))}
                        </div>
                        <div className="text-[gray] opacity-[0.8]">
                            <div className=" bg-[gray] h-[12px] animate-pulse w-[40%]"></div>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    );
};
