import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "search-bg": "url('/assets/main-bg.png')",
                "search-bg-mobile": "url('/assets/main-bg-mobile.jpg')",
                "search-bg-medium": "url('/assets/main-bg-medium.png')",
            },
            fontFamily: {
                arimo: ["Arimo", "sans-serif"],
                "arimo-bold": ["Arimo Bold", "sans-serif"],
                "arimo-italic": ["Arimo Italic", "sans-serif"],
            },
        },
        colors: {
            primary: "#E2183D",
            gray: "#D9D9D9",
            black: "#000000",
            white: "#FFFFFF",
        },
    },
    plugins: [],
};
export default config;
