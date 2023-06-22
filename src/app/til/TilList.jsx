import Link from "next/link";
import { getDb } from "@/lib/notion/getDb";
import { li } from "../collection/[slug]/[id]/tags/list";

export const revalidate = 0;

export default async () => {
    const db = await getDb();
    console.log(db);
    return (
        <ul className="flex flex-col">
            {db &&
                db.map((i) => (
                    <li key={i.id}>
                        <Link href={i.url}>
                            <article className="shadowBottom m-2 p-5 rounded-[10px]">
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
        </ul>
    );
};
