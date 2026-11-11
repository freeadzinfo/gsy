import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gsy: {
          navy: "#0B1F3A",
          "navy-deep": "#071324",
          "navy-mid": "#143054",
          "navy-soft": "#1E3F66",
          gold: "#9A6A28",
          "gold-bright": "#C8943A",
          "gold-light": "#DFCE9D",
          "gold-pale": "#F7F2E4",
          charcoal: "#2D3134",
          ivory: "#F8F7F3",
          slate: "#4B5565",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"IBM Plex Sans Arabic"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        arabic: [
          '"IBM Plex Sans Arabic"',
          '"Plus Jakarta Sans"',
          "Tahoma",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px rgba(11, 31, 58, 0.06), 0 8px 24px -8px rgba(11, 31, 58, 0.08)",
        "card-hover": "0 4px 12px rgba(11, 31, 58, 0.08), 0 18px 36px -12px rgba(11, 31, 58, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
