"use client";

import { NextSeo } from "next-seo";
import { DefaultSeo } from "next-seo";

export const DSeo = () => {
    const DEFAULT_SEO = {
        title: "Ateals Blog",
        description: "Welcome my Blog!",
        canonical: "https://www.carrotins.com",
        openGraph: {
            type: "website",
            locale: "ko_KR",
            url: "https://nextjs-blog-ateals.vercel.app/",
            title: "Ateals Blog",
            site_name: "Ateals Blog",
            images: [
                {
                    url: "https://nextjs-blog-ateals.vercel.app/images/logoImg.jpg",
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
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO} />
        </>
    );
};

export const PostSeo = ({ post }) => {
    const SEO = {
        title: "Ateals Blog",
        description: "Welcome my Blog!",
        canonical: "https://www.carrotins.com",
        openGraph: {
            type: "website",
            locale: "ko_KR",
            url: `https://nextjs-blog-ateals.vercel.app/posts/${post._raw.flattenedPath}`,
            title: post.title,
            site_name: "Ateals Blog",
            images: [
                {
                    url: post.img ? post.img : "https://nextjs-blog-ateals.vercel.app/images/logoImg.jpg",
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

    return (
        <>
            <NextSeo {...SEO} />
        </>
    );
};
