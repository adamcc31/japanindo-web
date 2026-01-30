import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        secondary: "#9c27b0",
        "background-light": "#ffffff",
        "background-dark": "#111827",
        "surface-light": "#f9fafb",
        "surface-dark": "#1f2937"
      },
      fontFamily: {
        display: ["var(--font-rubik)", "Rubik", "sans-serif"],
        body: ["var(--font-rubik)", "Rubik", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};

export default config;

