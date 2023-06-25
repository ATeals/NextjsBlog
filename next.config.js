const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    experimental: {
        appDir: true,
    },
    async rewrites() {
        return [
            {
                source: "/sitemap-1.xml",
                destination: "/api/sitemap-post",
            },
        ];
    },
};

module.exports = withContentlayer(nextConfig);
