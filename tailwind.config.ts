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
        sans:    ["'Satoshi'",         "system-ui", "sans-serif"],
        serif:   ["var(--font-instrument)", "Georgia", "serif"],
      },
      colors: {
        ink:    "#0C0C0B",
        muted:  "#4E4E48",   /* was #787872 — much darker, readable */
        faint:  "#898982",   /* was #ACACAA */
        border: "#E0DED7",
        paper:  "#F0EDE8",
        warm:   "#E6E2D8",
        green: {
          DEFAULT: "#16603A",
          hover:   "#124F30",
          faint:   "#16603A14",
          border:  "#16603A30",
        },
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,8vw,7rem)",   { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem,5vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.8rem,3.5vw,3rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};
export default config;
