/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
          900: "#2D2D2D", // darker for text
        },
        linen: {
          50: "#FAF9F6", // rgb(250, 249, 246)
          100: "#F5F4F0", // rgb(245, 244, 240)
        },
      },
      fontFamily: {
        karma: ["Karma", "serif"],
        serif: ["Karma", "serif"],
        Italiana: ["Italiana", "serif"],
      },
    },
  },
  plugins: [],
};
