const metaObj = {
    title: "Ateals Blog",
    description: "Welcome my Blog!",
    canonical: "https://www.carrotins.com",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://tealslog.vercel.app/",
        title: "Ateals Blog",
        site_name: "Ateals Blog",
        images: [
            {
                url: "https://tealslog.vercel.app/images/logoImg.jpg",
                width: 1900,
                height: 630,
                alt: "og: 이미지",
            },
        ],
    },
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
    },
};

export default metaObj;
