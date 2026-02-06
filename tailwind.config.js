/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#00f9d0",
        primary: "#000",
        secondary: "#16191e",
      },
      boxShadow: {
        "theme-inset": "inset 0 1px 0px 0px rgba(255,255,255,0.06)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
