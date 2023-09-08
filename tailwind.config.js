/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      emoji: ["Noto Emoji", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
