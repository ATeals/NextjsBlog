import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: "https://tealslog.vercel.app/",
            lastModified: new Date(),
        },
        {
            url: "https://tealslog.vercel.app/collection",
            lastModified: new Date(),
        },
        {
            url: "https://tealslog.vercel.app/tag",
            lastModified: new Date(),
        },
        {
            url: "https://tealslog.vercel.app/sitemap-0.xml",
            lastModified: new Date(),
        },
    ];
};

export default sitemap;
