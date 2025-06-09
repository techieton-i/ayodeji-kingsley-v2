/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        metal: {
          100: "#f1f3f4",
          200: "#d4d7dd",
          300: "#b8bcc6",
          400: "#9ba1af",
          500: "#7f8698",
          600: "#626b81",
          700: "#46506a",
          800: "#293553",
          900: "#0d1a3c",
        },
        rust: {
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#bf4e16",
        },
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        hero: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
