/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "sw-black": "#0b0d10",
        "sw-blue": "#5c85e7",
        "sw-gray": "#8d8d8d",
        "sw-white": "#fdfdfd",
      },
    },
  },
  plugins: [],
};
