/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "autumn",
      "bumblebee",
      "fantasy",
      "lofi",
      "luxury",
      "dracula",
      "black",
      "pastel"
    ]
  }
}

