import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'sans-serif'],
              },
            colors: {
                dark: {
                    50: '#ebe9e8',
                    75: '#aba3a0',
                    100: '#887d79',
                    200: '#55453f',
                    300: '#321f18',
                    400: '#231611',
                    500: '#1f130f',
                },
                neutral: {
                    50: '#fdfcfc',
                    75: '#f6f4f2',
                    100: '#f3f0ec',
                    200: '#eee9e4',
                    300: '#eae5df',
                    400: '#a4a09c',
                    500: '#8f8c88',
                },
                brown: {
                    50: '#f4ede7',
                    75: '#d4b39c',
                    100: '#c29473',
                    200: '#a76537',
                    300: '#95460e',
                    400: '#68310a',
                    500: '#5b2b09',
                },
                green: {
                    50: '#e6ebec',
                    75: '#97adaf',
                    100: '#6c8c8e',
                    200: '#2c5a5e',
                    300: '#01383d',
                    400: '#01272b',
                    500: '#012225',
                },
            },
        },
    },
};

export default config;
