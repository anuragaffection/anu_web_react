/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // background
        beige: "#FAF3EA",
        warmBeige: "#F7EFE3",

        // hover
        darkBeige: "#e6dfd6",
        coreBeige: "#F5EADC",

        // text color
        coreGray: "#A69986",
        warmGray: "#6B6255",
        darkGreen: "#0D3C26",

        // button color
        darkGreenHigh: "#038247",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
