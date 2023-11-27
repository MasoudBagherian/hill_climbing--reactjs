/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      lg: { max: "56rem" },
      md: { max: "38rem" },
      sm: { max: "30rem" },
    },
    extend: {
      colors: {
        primary: "#324252",
        secondary: "#3e5165",
      },
    },
  },
  plugins: [],
};
