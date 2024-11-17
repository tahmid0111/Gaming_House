import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "320px",
        xxs: "380px",
        xxm: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [daisyui],
};
export default config;
