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
        const data = await (await fetch(`/api/getOg?api_key=hu6HzhQY07Zq79MA98dhYV2Mp&url=${url}`)).json();
        console.log(data);
        setData(data);
    };

    useEffect(() => {
        getOgData(url);
    }, []);

    return <>{data && <a href={url}>{data.title}</a>}</>;
};
