/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      cursor: {
        'galaxy': `url('./assets/cursor.cur'), pointer`,
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "autumn",
      "fantasy",
      "lofi",
      "black",
      "dracula",
    ]
  }
}

