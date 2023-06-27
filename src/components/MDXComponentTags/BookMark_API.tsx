"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface data {
    title: string;
    image: {
        url: string;
    };
    description?: string;
}

export default ({ url }: { url: string }) => {
    const [data, setData] = useState<data>();

    const getOgData = async (url: string) => {
        const data = await (await fetch(`/api/getOg?api_key=${process.env.NEXT_PUBLIC_API_KEY}&url=${url}`)).json();
        setData(data);
        console.log(data);
    };

    useEffect(() => {
        getOgData(url);
    }, []);

    return (
        <>
            {data && (
                <Link href={url}>
                    <div className="shadowBottom my-10 flex h-[200px] hover:scale-105">
                        <div className="h-full w-[30%] relative">
                            <img
                                src={data.image.url}
                                alt="Image"
                                className="h-full w-full object-cover "
                            />
                        </div>
                        <div className="w-[70%] h-full relative flex flex-col justify-between p-4">
                            <div>
                                <h1 className="text-[24px] font-bold mb-2 ">{data.title}</h1>
                                <p className="text-[12px]">{data.description}</p>
                            </div>

                            <small className="text-end">{decodeURI(url)}</small>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};
