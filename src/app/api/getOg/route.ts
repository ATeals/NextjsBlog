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
    const url = request.nextUrl.searchParams.get("url");
    const key = request.nextUrl.searchParams.get("api_key");
    console.log(url, key);
    if (key !== process.env.API_KEY) return NextResponse.json({ title: "NOT MATCH API KEY", key });
    if (!url) return NextResponse.json({ title: "NO URL" });

    const data = await getOg(encodeURI(url));
    return NextResponse.json(data);
}
