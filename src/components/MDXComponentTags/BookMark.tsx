import Link from "next/link";
import { use } from "react";

interface data {
    title: string;
    image: {
        url: string;
    };
    description?: string;
}
const getOgData = async (url: string) => {
    const baseUrl = process.env.NODE_ENV === "development" ? `http://localhost:3000` : "https://tealslog.vercel.app";
    const data = await (await fetch(baseUrl + `/api/getOg?api_key=${process.env.NEXT_PUBLIC_API_KEY}&url=${url}`)).json();
    return data;
};

export default ({ url }: { url: string }) => {
    const data: data = use(getOgData(url));

    return (
        <>
            {data && (
                <Link
                    href={url}
                    target="_blank"
                >
                    <div className="shadowBottom my-10 flex h-[200px] hover:scale-105">
                        <div className="h-full w-[30%] relative">
                            <img
                                src={data.image?.url}
                                alt="Image"
                                className="h-full w-full object-cover "
                            />
                        </div>
                        <div className="w-[70%] h-full relative flex flex-col justify-between p-4">
                            <div className="overflow-hidden">
                                <h1 className="text-[24px] font-bold mb-2 ">{data.title}</h1>
                                <p className="text-[12px]">{data.description}</p>
                            </div>

                            <small className="text-end overflow-clip text-[gray]">{decodeURI(url)}</small>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export const SkeletonBookmark = () => {
    return (
        <div className="shadowBottom my-10 flex h-[200px]">
            <div className="h-full w-[30%] bg-[gray] animate-pulse"></div>
            <div className="w-[70%] h-full relative flex flex-col justify-between p-4">
                <div>
                    <h1 className="w-[40%] text-[24px] font-bold mb-2 bg-[gray] h-[30px] animate-pulse"></h1>
                    <div className="w-[100%] text-[12px] h-[16px] animate-pulse flex items-center"></div>
                </div>
                <small className="text-end bg-[gray] h-[12px] animate-pulse"></small>
            </div>
        </div>
    );
};
