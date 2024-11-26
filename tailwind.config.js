/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('./images/i.png')"
      }
    },
  },
  plugins: [],
}