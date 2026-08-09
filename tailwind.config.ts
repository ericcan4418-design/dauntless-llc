import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ["var(--font-geist)",           "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)",      "Georgia",   "serif"],
      },
      colors: {
        ink:    "#111110",
        muted:  "#6B6B67",
        faint:  "#9D9D99",
        border: "#E5E5E0",
        paper:  "#F3F3F0",
        green: {
          DEFAULT: "#1A6B3A",
          light:   "#2A9557",
          muted:   "#1A6B3A1A", // 10% opacity
        },
      },
    },
  },
  plugins: [],
};
export default config;
