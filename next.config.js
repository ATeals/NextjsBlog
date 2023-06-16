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
                source: "/api/og",
                destination: `/api/getog?api_key=hu6HzhQY07Zq79MA98dhYV2Mp`,
            },
        ];
    },
};

module.exports = withContentlayer(nextConfig);
