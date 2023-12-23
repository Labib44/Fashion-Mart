/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "991px" },
      lg: { min: "992px", max: "1200px" },
      xl: { min: "1201px", max: "1280px" },
      xxl: { min: "1281px", max: "1440px" },
    },

    extend: {
      colors: {
        primary: "",
        secondary: "#FB3C60",
        accent: "#979797",
        info: "#FB5F7C",
      },
    },
  },
  plugins: [require("daisyui")],
}

