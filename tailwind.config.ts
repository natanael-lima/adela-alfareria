import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        xxl: ["7rem", { lineHeight: "1.2" }], // Texto grande "xxl"
        xxxl: ["10rem", { lineHeight: "1.2" }],  // Texto más grande "xxxl"
        huge: ["16rem", { lineHeight: "1.1" }],  // Texto enorme "huge"
      },
    },
  },
  plugins: [],
};

export default config;
