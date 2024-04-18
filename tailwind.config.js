/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lilaPortfolio: "#9C92F8",
        grayPortfolio: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
