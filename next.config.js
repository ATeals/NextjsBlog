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
                source: "/api/getog",
                destination: `/api/getog?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        ];
    },
};

module.exports = withContentlayer(nextConfig);
