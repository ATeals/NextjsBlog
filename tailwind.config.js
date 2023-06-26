/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            darkText: "#E0E0E0",
            darkBg: "#1E1E1E",
            highlight: "#577cf1",
            gray: "#e0e0e0",
            asideBg: "#545454",
        },
        boxShadow: {
            top: `-5px -5px 24px #d4d4d4, 5px 5px 24px #ffffff`,
            bottom: `5px 5px 24px #d4d4d4, -5px -5px 24px #d4d4d4`,
            topDark: `-15px -15px 24px #0f0f0f, 15px 15px 24px #151515`,
            bottomDark: `15px 15px 24px #151515, -15px -15px 24px #151515`,
            none: `0 0 #000000`,
        },
    },
    plugins: [],
};
