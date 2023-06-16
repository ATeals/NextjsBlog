"use client";

import { useEffect, useState } from "react";

interface data {
    title: string;
    img: string;
    descripton?: string;
}

export default ({ url }: { url: string }) => {
    const [data, setData] = useState<data>();

    const getOgData = async (url: string) => {
        const data = await (await fetch(`/api/getOg?api_key=${process.env.NEXT_PUBLIC_API_KEY}&url=${url}`)).json();
        setData(data);
    };

    useEffect(() => {
        getOgData(url);
    }, []);

    return <>{data && <a href={url}>{data.title}</a>}</>;
};
