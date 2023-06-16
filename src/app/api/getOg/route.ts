import { NextRequest, NextResponse } from "next/server";
import og from "open-graph";

const getOg = (url: string) =>
    new Promise((resolve, reject) => {
        og(url, function (err, meta) {
            if (err) {
                reject(err);
                return;
            }
            resolve(meta);
        });
    });

export async function GET(request: NextRequest, response: NextResponse) {
    // const url = request.nextUrl.searchParams.get("url");
    // const { api_key } = JSON.parse(decodeURIComponent(request.headers.get("x-invoke-query") || ""));
    const data = JSON.parse(decodeURIComponent(request.headers.get("x-invoke-query") || ""));
    console.log(data);
    // if (api_key !== process.env.API_KEY) return NextResponse.json({ title: "NOT MATCH API KEY", api_key });
    // if (!url) return NextResponse.json({ title: "NO URL" });

    // const data = await getOg(encodeURI(url));
    return NextResponse.json(data);
}

// export async function GET(request: NextRequest) {
//     const { api_key } = JSON.parse(decodeURIComponent(request.headers.get("x-invoke-query") || ""));
//     const id = request.nextUrl.searchParams.get("id");
//     console.log(request.headers);
//     if (api_key !== process.env.API_KEY) return NextResponse.json({ title: "NOT MATCH API KEY", api_key });

//     return NextResponse.json({ title: "Succese", api_key });
// }
