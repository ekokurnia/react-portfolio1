/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      inter: "Inter",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brand: "#EF5DA8",
        main: "#393F48",
      },
      backgroundImage: {
        ellipse: 'url("src/assets/ellipse.svg")',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#EF5DA8",
          "--btn-text-case": "normalcase",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
