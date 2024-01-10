/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#8A8A8A",
        orange: "#E65925",
        orangeHover: "#c94b1d",
        white1: "#F2F2F2",
        blackFont: "#2C2C2C",
        greyCard: "#333333",
        cardList: "#49454F",
      },
    },
  },
  plugins: [],
};
