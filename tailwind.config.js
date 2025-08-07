/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          300: "#A1B184", // rgb(161, 177, 132)
        },
        olive: {
          500: "#626A48", // rgb(98, 106, 72)
        },
        graphite: {
          700: "#404040", // rgb(64, 64, 64)
        },

      },
      fontFamily: {
        karma: ["Karma", "serif"],
        serif: ["Karma", "serif"],
      },
    },
  },
  plugins: [],
};
