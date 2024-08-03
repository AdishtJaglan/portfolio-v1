/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "theme-1": "#f87171",
        "theme-2": "#facc15",
        "theme-3": "#0ea5e9",
        light: "#f1f5f9",
        dark: "#27272a",
      },
    },
  },
  plugins: [],
};
