/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          300: "#A3B18A",
        },
        olive: {
          500: "#656D4A",
        },
        graphite: {
          900: "#333333",
        },
        linen: {
          50: "#FAF9F6",
        },
      },
    },
  },
  plugins: [],
};
