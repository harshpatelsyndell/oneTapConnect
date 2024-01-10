/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#8A8A8A",
        orange: "#E65925",
        white1: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
