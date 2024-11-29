/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // background
        beige: "#FAF3EA",
        warmBeige: "#F7EFE3",

        // text color
        warnGray: "#6B6255",
        darkGreen: "#0D3C26",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
