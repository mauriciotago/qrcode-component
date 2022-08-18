/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "light-gray": "hsl(212, 45%, 89%)",
      "grayish-blue": "hsl(220, 15%, 55%)",
      "dark-blue": "hsl(218, 44%, 22%)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    fontSize: {
      header: "1.25rem",
      paragraph: "0.9375rem",
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
