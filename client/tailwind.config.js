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
        "theme-4":"#65a30d",
        light: "#f1f5f9",
        dark: "#27272a",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
