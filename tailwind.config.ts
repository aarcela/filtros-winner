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
                "bg1": "url('/assets/1.jpg')",
                "bg2": "url('/assets/2.jpg')",
                "bg3": "url('/assets/3.jpg')",
                "bg4": "url('/assets/4.jpg')"

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
