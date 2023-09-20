import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#171717",
      white: colors.white,
      "light-grey": "#f2f2f2",
      blue: "#0d6ede",
      "light-blue": "#94d4f0",
    },
    extend: {
      maxWidth: {
        "10xl": "96rem",
      },
      fontFamily: {
        poppins: ["poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10xl": "14rem",
        "4.5xl": "2.5rem",
      },
      boxShadow: {
        "inner-custom":
          "inset 0 1px 15px 0px rgba(255,255,255,0.2), 0 1px 25px 0px rgba(255,255,255,0.2) ",
      },
      keyframes: {
        "pulse-light": {
          "0%, 100%": { opacity: "0.75" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "pulse-light": "pulse-light 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
