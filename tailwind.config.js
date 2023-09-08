/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      'emoji': ['Noto Emoji', 'sans-serif'],
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

